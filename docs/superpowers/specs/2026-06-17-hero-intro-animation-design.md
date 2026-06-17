# Hero Intro Animation — Design Spec

## Goal

Replace the current fullscreen MP4-based intro overlay with a lightweight, hero-section-only CSS/WAAPI animation that reveals the ISG logo in the hero, FLIPs it to the navbar, then fades the hero content in. Skips entirely on mobile and when `prefers-reduced-motion` is set.

## Problem With Current Implementation

- Loads a 167KB MP4 video on every page load
- Blocks the entire viewport with a fixed overlay (z-index 9999)
- Shows on mobile where it adds jank with no benefit
- Video decode overhead + network request hurts performance

---

## Replacement Design

### Component: `HeroIntro`

A `'use client'` component rendered **inside** `Hero.tsx` (not in layout). It owns the animation lifecycle entirely.

**File:** `components/HeroIntro/HeroIntro.tsx`
**CSS:** `components/HeroIntro/HeroIntro.module.css`

---

### State Machine

```
'animating' → (FLIP complete + reveal done) → 'done'
```

State initialises to `'done'` immediately (via `useRef` flag, not useState) when any of the following are true:
- `window.matchMedia('(max-width: 768px)').matches` — mobile device
- `window.matchMedia('(prefers-reduced-motion: reduce)').matches` — user preference
- `sessionStorage.getItem('isg-intro-shown') === '1'` — already played this session

All three checks run inside `useEffect` (client-only, SSR-safe). When the animation completes (reveal fires), `sessionStorage.setItem('isg-intro-shown', '1')` is called so subsequent page navigations within the same browser session skip the animation. The component renders `null` when done — no DOM, no overhead.

**Homepage-only scope:** `HeroIntro` is rendered inside `Hero.tsx`, which is only imported by `app/page.tsx` (the homepage). No other page renders `Hero`, so the animation is inherently scoped to the homepage. No additional routing check is needed.

---

### Sequence (Desktop, No Reduced Motion)

| Step | Timing | What Happens |
|---|---|---|
| Mount | t=0 | `HeroIntro` mounts. Adds `.heroHidden` class to the `.split` div (via `splitRef`). Adds `data-intro-suppress` to `<HeroAnimation>` wrapper to suppress the background cable SVG animation. Renders large logo (120px) centered in hero with `opacity: 0`. |
| Logo entrance | t=0–300ms | CSS class `.logoVisible` added → logo fades in via CSS class toggle (NOT a `transition` on `opacity` directly — uses `animation: logoFadeIn 0.3s ease forwards` keyframe so WAAPI can take ownership of `opacity` during FLIP without conflict). |
| Hold | t=300–900ms | Logo at rest, centered in hero. |
| FLIP | t=900ms | Measure `logoRef.current.getBoundingClientRect()` and `[data-navbar-logo] img` rect (targeting the `<img>` inside the Link, not the Link itself, for accurate dimensions). Fire WAAPI `animate()` — translate + scale + opacity to 0 — 600ms. |
| Reveal | FLIP `animation.finished` | Remove `.heroHidden` from `.split` div. Remove `data-intro-suppress`. Apply `data-intro="1"` → `"4"` stagger classes. `HeroIntro` returns `null` (unmounts). |

**Total animation time: ~1.5s**

---

### Hero Column Hiding

`HeroIntro` receives a `splitRef: React.RefObject<HTMLDivElement>` prop pointing to the `div` with `className={styles.split}` in `Hero.tsx`. This is the exact element that wraps `.left` and `.right`.

The CSS class is toggled on that element:

```css
/* Hero.module.css */
.split.heroHidden > * {
  visibility: hidden;
}
```

`visibility: hidden` (not `display: none`) preserves layout geometry so `getBoundingClientRect()` reads during FLIP are valid.

---

### HeroAnimation During Intro

`Hero.tsx` currently renders `<HeroAnimation />` — a background SVG cable-draw animation. During the intro, this should be suppressed so it doesn't run concurrently with the logo hold.

Implementation: `HeroAnimation` is wrapped in a `<div data-hero-animation>`. `HeroIntro` sets `data-intro-suppress` on that wrapper on mount (via a second ref: `heroAnimRef`), which pauses its CSS animations via:

```css
/* Hero.module.css */
[data-intro-suppress] * {
  animation-play-state: paused !important;
}
```

On reveal (after FLIP), `HeroIntro` removes `data-intro-suppress`, allowing `HeroAnimation` to start from t=0 as the hero content fades in.

---

### FLIP Implementation

Target: the `<img>` element inside `[data-navbar-logo]`, not the Link container, for accurate height/width:

```ts
const navImg = document.querySelector('[data-navbar-logo] img') as HTMLElement | null
```

FLIP:

```ts
const introRect = logoRef.current.getBoundingClientRect()
const navRect = navImg.getBoundingClientRect()

const dx = (navRect.left + navRect.width / 2) - (introRect.left + introRect.width / 2)
const dy = (navRect.top + navRect.height / 2) - (introRect.top + introRect.height / 2)
const scale = navRect.height / introRect.height

const anim = logoRef.current.animate(
  [
    { transform: 'translate(0,0) scale(1)', opacity: 1 },
    { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 0 },
  ],
  { duration: 600, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
)

anim.finished.then(() => reveal()).catch(() => reveal())
```

**Cleanup:** `fill: 'forwards'` keeps the end state while the `finished` promise resolves. `HeroIntro` then calls `setPhase('done')` which causes it to return `null` — React unmounts the element, automatically discarding the held animation state. No `animation.cancel()` needed (that would flash the logo back briefly before unmount).

---

### Hero Content Stagger Reveal

`data-intro` attributes on specific elements in `Hero.tsx`:

| Attribute | Element | Delay |
|---|---|---|
| `data-intro="1"` | `<h1>` (headline) | 0ms |
| `data-intro="2"` | `<p>` (subheadline) | 80ms |
| `data-intro="3"` | `.actions` div | 160ms |
| `data-intro="4"` | `.trust` div | 240ms |

On reveal, `HeroIntro` queries `splitRef.current.querySelectorAll('[data-intro]')`, sorts by attribute value, and applies `.fadeIn` class with `animationDelay` set inline:

```ts
el.style.animationDelay = `${(index * 80)}ms`
el.classList.add(styles.fadeIn)
```

CSS:

```css
/* Hero.module.css */
[data-intro] {
  opacity: 0;
}
.fadeIn {
  animation: introFadeUp 0.4s ease forwards;
}
@keyframes introFadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

**Important:** `[data-intro]` elements start at `opacity: 0` via CSS (not JS) so they're invisible on SSR. This means the hero content is always invisible until `HeroIntro` triggers the reveal — on mobile/reduced-motion, the reveal fires immediately on mount (t=0, no animation, just class removal to restore visibility).

Wait — this conflicts with the mobile skip. On mobile, `HeroIntro` returns `null` immediately without revealing content. Fix: on mobile/reduced-motion, `HeroIntro` fires `reveal()` synchronously before returning null, so the `[data-intro]` opacity-0 state is immediately cleared. Alternatively (cleaner): only apply `data-intro` attributes when the intro is actually running. The component should inject `data-intro` onto elements via `splitRef` on mount if `!isMobile`, and never add them if mobile/reduced-motion — ensuring the server-rendered HTML never has `opacity: 0` elements.

**Revised approach for stagger targets:** `HeroIntro` adds `data-intro` via JS on mount (only on desktop), never in JSX. Hero.tsx does not include `data-intro` in its static markup. This avoids any SSR flash-of-invisible-content.

---

### Logo CSS Entrance (Avoiding Transition/WAAPI Conflict)

The logo entrance uses a **keyframe animation** (not a CSS `transition`) so WAAPI can independently animate `opacity` during FLIP without fighting the CSS transition:

```css
/* HeroIntro.module.css */
.logo {
  opacity: 0;
  /* no transition on opacity — WAAPI owns it during FLIP */
}
.logoVisible {
  animation: logoFadeIn 0.3s ease forwards;
}
@keyframes logoFadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
}
```

`animation-fill-mode: forwards` keeps the logo at `opacity: 1` after the keyframe ends, until WAAPI takes over for the FLIP.

---

### Error Handling

- If `[data-navbar-logo] img` not found → skip FLIP, call `reveal()` directly
- If WAAPI throws → `.catch(() => reveal())`
- If `splitRef.current` is null on mount → bail out, hero content stays visible (no `.heroHidden` applied)
- Reveal always runs — animation failure never blocks hero content

---

### Files Changed

| File | Change |
|---|---|
| `components/HeroIntro/HeroIntro.tsx` | **Create** |
| `components/HeroIntro/HeroIntro.module.css` | **Create** |
| `components/Hero/Hero.tsx` | Import `HeroIntro`, add `splitRef`, wrap `HeroAnimation` in `ref`-able div, pass refs to `HeroIntro` |
| `components/Hero/Hero.module.css` | Add `.heroHidden`, `.fadeIn`, `[data-intro]`, `@keyframes introFadeUp`, `[data-intro-suppress]` rule |
| `components/IntroAnimation/IntroAnimation.tsx` | **Delete** |
| `components/IntroAnimation/IntroAnimation.module.css` | **Delete** |
| `app/layout.tsx` | Remove `IntroAnimation` import + JSX; remove `<link rel="preload" href="/videos/intro.mp4" as="video" type="video/mp4" />`; remove `<head>` block if now empty |
| `public/videos/intro.mp4` | **Delete** |
| `public/videos/intro-orig.mp4` | **Delete** |

---

### Performance Characteristics

- Zero network requests (no video)
- Zero new npm dependencies
- Animation runs on compositor thread (transform + opacity only)
- Mobile / reduced-motion: zero JS animation overhead, hero renders immediately
- Total new JS: ~2KB
- `[data-intro]` attributes injected via JS only — no SSR opacity-0 flash on mobile

---

### Accessibility

- `prefers-reduced-motion: reduce` → skip all animation, hero renders immediately
- Logo element: `aria-hidden="true"` (decorative, navbar has the accessible logo)
- No content is permanently hidden — reveal always fires
