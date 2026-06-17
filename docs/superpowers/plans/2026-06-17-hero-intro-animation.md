# Hero Intro Animation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the fullscreen MP4 intro overlay with a lightweight CSS/WAAPI animation that shows the ISG logo in the hero section, FLIPs it to the navbar, then reveals hero content — playing once per session, desktop only, homepage only.

**Architecture:** A new `HeroIntro` client component mounts inside `Hero.tsx`, checks sessionStorage/mobile/reduced-motion on mount (client-only), and if animation should play: hides hero content with `visibility: hidden`, renders a large centered logo, fades it in, then FLIPs it to the navbar logo position via WAAPI. `Hero.tsx` holds `heroAnimReady` state and only mounts `<HeroAnimation />` after `HeroIntro` fires `onReveal()`, so the background cable animation starts fresh after the intro. The old `IntroAnimation` component, its CSS, and the MP4 videos are deleted entirely.

**Tech Stack:** Next.js App Router, React client components, Web Animations API (WAAPI), CSS Modules, sessionStorage, `window.matchMedia`

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `components/HeroIntro/HeroIntro.tsx` | **Create** | Animation logic — sessionStorage check, FLIP, reveal |
| `components/HeroIntro/HeroIntro.module.css` | **Create** | Logo entrance animation styles |
| `app/globals.css` | **Modify** | Add global helpers: `isg-hero-hidden`, `isg-fade-in`, keyframes |
| `components/Hero/Hero.tsx` | **Modify** | Add `'use client'`, refs, `heroAnimReady` state, `data-hero-item` attrs, render `HeroIntro` |
| `app/layout.tsx` | **Modify** | Remove `IntroAnimation` import/JSX and `<link rel="preload">` for video |

> **Note — `Hero.module.css` not in file map:** The spec listed `Hero.module.css` as a file to modify (for `.heroHidden`, `[data-intro-suppress]`, etc.). This plan uses `globals.css` instead, because HeroIntro's JS applies class names as plain strings to DOM elements owned by Hero — CSS module scoped names are inaccessible cross-component. The global `isg-hero-hidden` and `isg-fade-in` classes are functionally equivalent and deliberately simpler.

> **Note — HeroAnimation suppression:** The spec describes suppressing the cable SVG animation via `data-intro-suppress` attribute and `animation-play-state: paused`. This plan uses a simpler and more reliable mechanism: `{heroAnimReady && <HeroAnimation />}` in Hero.tsx. `HeroAnimation` does not mount at all until `onReveal()` fires, so its WAAPI animations never start during the intro. No DOM attribute tricks needed since HeroAnimation uses WAAPI (not CSS animations) and WAAPI is not affected by `animation-play-state`.
| `components/IntroAnimation/IntroAnimation.tsx` | **Delete** | Replaced by HeroIntro |
| `components/IntroAnimation/IntroAnimation.module.css` | **Delete** | Replaced |
| `public/videos/intro.mp4` | **Delete** | No longer needed |
| `public/videos/intro-orig.mp4` | **Delete** | No longer needed |

---

## Task 1: Add Global CSS Helpers

**Files:**
- Modify: `app/globals.css`

These classes are applied to DOM elements by `HeroIntro` using string class names (not CSS module names), so they must be global — not scoped to a CSS module.

- [ ] **Step 1: Append the following block to the bottom of `app/globals.css`**

```css
/* ── HeroIntro animation helpers ── */
.isg-hero-hidden > * {
  visibility: hidden;
}

@keyframes isgFadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

.isg-fade-in {
  animation: isgFadeUp 0.4s ease forwards;
}
```

- [ ] **Step 2: Verify**

Run: `npm run dev` (if not already running)

Open [http://localhost:3000](http://localhost:3000) in a browser. Open DevTools → Elements. Confirm you can find `.isg-hero-hidden` and `.isg-fade-in` in the computed stylesheet. (You can temporarily add `class="isg-hero-hidden"` to the body to test — everything should go `visibility: hidden`.)

- [ ] **Step 3: Commit**

```bash
git -C "/Users/Dessy/Desktop/integrated solutions" add app/globals.css
git -C "/Users/Dessy/Desktop/integrated solutions" commit -m "feat(hero-intro): add global animation helper classes"
```

---

## Task 2: Create HeroIntro CSS Module

**Files:**
- Create: `components/HeroIntro/HeroIntro.module.css`

This file handles: the container positioning, logo entrance keyframe, and `logoVisible` class toggle. The WAAPI FLIP animation later takes over `opacity`, so the logo's CSS entrance MUST use a `@keyframes` animation (not a `transition`) — otherwise the CSS transition and WAAPI will fight.

- [ ] **Step 1: Create the directory and file**

Create `/Users/Dessy/Desktop/integrated solutions/components/HeroIntro/HeroIntro.module.css` with this content:

```css
/* Absolutely fills the hero section, centers the logo */
.container {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
}

/* Logo starts invisible — WAAPI will own opacity during FLIP, so NO transition here */
.logo {
  opacity: 0;
}

/* Added via JS after 50ms to start the entrance */
.logoVisible {
  animation: logoFadeIn 0.3s ease forwards;
}

.logoImg {
  height: 120px;
  width: auto;
  display: block;
  filter: drop-shadow(0 4px 24px rgba(0, 0, 0, 0.5));
}

@keyframes logoFadeIn {
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
}
```

- [ ] **Step 2: Commit**

```bash
git -C "/Users/Dessy/Desktop/integrated solutions" add components/HeroIntro/HeroIntro.module.css
git -C "/Users/Dessy/Desktop/integrated solutions" commit -m "feat(hero-intro): add HeroIntro CSS module"
```

---

## Task 3: Create HeroIntro Component

**Files:**
- Create: `components/HeroIntro/HeroIntro.tsx`

**Key decisions baked in:**
- `onRevealRef` captures the `onReveal` prop in a ref so it never appears in the `useEffect` dependency array (avoids re-running on re-renders)
- `mounted` flag prevents state updates after unmount (guards against WAAPI `.finished.then()` firing after navigation)
- FLIP targets `[data-navbar-logo] img` — the `<img>` inside the Navbar's Link, not the Link itself — for accurate height measurement
- Stagger applies to elements with `data-hero-item` attribute (added in Task 4 to Hero.tsx)
- sessionStorage key: `isg-intro-shown`
- **Content hiding uses two layers:** (1) `splitRef.current.classList.add('isg-hero-hidden')` adds the global CSS rule `.isg-hero-hidden > * { visibility: hidden }` which makes the entire `.left` and `.right` columns invisible during the logo hold. (2) `el.style.opacity = '0'` is set on each `[data-hero-item]` element so that after `isg-hero-hidden` is removed on reveal, those elements start at opacity 0 and animate in via `isg-fade-in`. Both mechanisms are needed — the first hides everything (including non-staggered elements like the form), the second enables the staggered reveal.
- **Null guard on `splitRef.current`:** If the ref hasn't attached (shouldn't happen, but defensive), immediately reveal and skip the animation rather than silently failing.

- [ ] **Step 1: Create the file**

Create `/Users/Dessy/Desktop/integrated solutions/components/HeroIntro/HeroIntro.tsx` with this content:

```tsx
'use client'
import { useEffect, useRef, useState, RefObject } from 'react'
import styles from './HeroIntro.module.css'

interface HeroIntroProps {
  splitRef: RefObject<HTMLDivElement>
  onReveal: () => void
}

export default function HeroIntro({ splitRef, onReveal }: HeroIntroProps) {
  const [done, setDone] = useState(false)
  const [logoVisible, setLogoVisible] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)
  const onRevealRef = useRef(onReveal)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const alreadyShown = sessionStorage.getItem('isg-intro-shown') === '1'

    if (isMobile || reducedMotion || alreadyShown) {
      onRevealRef.current()
      setDone(true)
      return
    }

    // Bail if splitRef hasn't attached (defensive — should not happen in practice)
    if (!splitRef.current) {
      onRevealRef.current()
      setDone(true)
      return
    }

    let mounted = true

    // Find stagger targets before hiding (so we can restore them on reveal)
    const staggerTargets = Array.from(
      splitRef.current.querySelectorAll('[data-hero-item]')
    ) as HTMLElement[]

    // Hide hero content.
    // isg-hero-hidden > * { visibility: hidden } makes .left and .right invisible.
    // Setting opacity:0 on each stagger target is additional so on reveal they animate from 0.
    staggerTargets.forEach(el => { el.style.opacity = '0' })
    splitRef.current.classList.add('isg-hero-hidden')

    // Fade logo in after paint settles
    const fadeTimer = setTimeout(() => {
      if (mounted) setLogoVisible(true)
    }, 50)

    // Fire FLIP after logo hold period
    const flipTimer = setTimeout(flip, 900)

    function flip() {
      const logoEl = logoRef.current
      if (!logoEl || !mounted) { reveal(); return }

      const introRect = logoEl.getBoundingClientRect()
      const navImg = document.querySelector('[data-navbar-logo] img') as HTMLElement | null
      if (!navImg) { reveal(); return }
      const navRect = navImg.getBoundingClientRect()

      const dx = (navRect.left + navRect.width / 2) - (introRect.left + introRect.width / 2)
      const dy = (navRect.top + navRect.height / 2) - (introRect.top + introRect.height / 2)
      const scale = navRect.height / introRect.height

      logoEl.animate(
        [
          { transform: 'translate(0,0) scale(1)', opacity: 1 },
          { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 0 },
        ],
        { duration: 600, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
      ).finished.then(reveal).catch(reveal)
    }

    function reveal() {
      if (!mounted) return

      // Restore hero content (splitRef.current is guaranteed non-null — checked above)
      splitRef.current!.classList.remove('isg-hero-hidden')

      // Stagger-reveal each [data-hero-item] element
      staggerTargets.forEach((el, i) => {
        el.style.removeProperty('opacity')
        el.style.animationDelay = `${i * 80}ms`
        el.classList.add('isg-fade-in')
      })

      sessionStorage.setItem('isg-intro-shown', '1')
      onRevealRef.current()
      setDone(true)
    }

    return () => {
      mounted = false
      clearTimeout(fadeTimer)
      clearTimeout(flipTimer)
    }
  }, [splitRef])

  if (done) return null

  return (
    <div className={styles.container} aria-hidden="true">
      <div
        ref={logoRef}
        className={`${styles.logo} ${logoVisible ? styles.logoVisible : ''}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt=""
          className={styles.logoImg}
        />
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors for the new file (ignore any pre-existing errors in other files)

- [ ] **Step 3: Commit**

```bash
git -C "/Users/Dessy/Desktop/integrated solutions" add components/HeroIntro/HeroIntro.tsx
git -C "/Users/Dessy/Desktop/integrated solutions" commit -m "feat(hero-intro): create HeroIntro component"
```

---

## Task 4: Update Hero.tsx

**Files:**
- Modify: `components/Hero/Hero.tsx`

Changes needed:
1. Add `'use client'` directive — Hero needs `useRef` and `useState`
2. Add `splitRef` ref pointing to the `.split` div
3. Add `heroAnimReady` state — `HeroAnimation` only mounts after `onReveal` fires (prevents WAAPI cable animations from running during intro)
4. Add `data-hero-item` to 4 elements for stagger targeting (h1, p.sub, .actions, .trust)
5. Import and render `HeroIntro` with `splitRef` and `onReveal` props

- [ ] **Step 1: Replace the entire contents of `components/Hero/Hero.tsx`**

```tsx
'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import HeroAnimation from '@/components/HeroAnimation/HeroAnimation'
import HeroForm from '@/components/HeroForm/HeroForm'
import HeroIntro from '@/components/HeroIntro/HeroIntro'
import styles from './Hero.module.css'

interface HeroProps {
  eyebrow?: string
  headline: React.ReactNode
  subheadline?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCta = { label: 'Get a Free Quote', href: '/contact' },
  secondaryCta,
}: HeroProps) {
  const splitRef = useRef<HTMLDivElement>(null)
  const [heroAnimReady, setHeroAnimReady] = useState(false)

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} aria-hidden />
      <div className={styles.grid} aria-hidden />
      {heroAnimReady && <HeroAnimation />}
      <HeroIntro splitRef={splitRef} onReveal={() => setHeroAnimReady(true)} />

      <div ref={splitRef} className={`container ${styles.split}`}>
        {/* Left — content */}
        <div className={styles.left}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1 className={styles.headline} data-hero-item>{headline}</h1>
          {subheadline && <p className={styles.sub} data-hero-item>{subheadline}</p>}
          <div className={styles.actions} data-hero-item>
            <Link href={primaryCta.href} className="btn-primary">{primaryCta.label} →</Link>
            {secondaryCta && (
              <a href="tel:5550000000" className="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.13h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.08 6.08l1.96-1.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {secondaryCta.label}
              </a>
            )}
          </div>
          <div className={styles.trust} data-hero-item>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              5-Star Rated
            </span>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
              </svg>
              Licensed &amp; Insured
            </span>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
              Same-Week Availability
            </span>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Local Georgia Team
            </span>
          </div>
        </div>

        {/* Right — quote form */}
        <div className={styles.right}>
          <HeroForm />
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No new errors

- [ ] **Step 3: Verify in browser**

With dev server running, navigate to [http://localhost:3000](http://localhost:3000).

On first load (sessionStorage empty): The hero content should be hidden briefly → ISG logo fades in centered in hero → logo FLIPs to navbar → hero content fades in with stagger → cable animation starts.

After animation completes: Open DevTools → Application → Session Storage. Confirm `isg-intro-shown` = `"1"` is set.

Reload the page: Animation should NOT play (sessionStorage already set). Hero content and cable animation appear immediately.

- [ ] **Step 4: Commit**

```bash
git -C "/Users/Dessy/Desktop/integrated solutions" add components/Hero/Hero.tsx
git -C "/Users/Dessy/Desktop/integrated solutions" commit -m "feat(hero-intro): wire HeroIntro into Hero, add heroAnimReady gate"
```

---

## Task 5: Update layout.tsx

**Files:**
- Modify: `app/layout.tsx`

Remove:
- `import IntroAnimation from '@/components/IntroAnimation/IntroAnimation'`
- `<IntroAnimation />` JSX (first child of `<body>`)
- `<link rel="preload" href="/videos/intro.mp4" as="video" type="video/mp4" />` in `<head>`
- The now-empty `<head>` block (if no other tags remain in it)

- [ ] **Step 1: Replace the entire contents of `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Integrated Solutions of Georgia | AV & Home Technology Installer',
    template: '%s | Integrated Solutions of Georgia',
  },
  description:
    'Integrated Solutions of Georgia — licensed and insured AV installation in Cumming, Alpharetta, Johns Creek & North Atlanta. TV mounting, home theaters, security cameras, Starlink, and commercial AV.',
  openGraph: {
    siteName: 'Integrated Solutions of Georgia',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify the page still builds**

Run: `npm run build`
Expected: Build succeeds with no errors about missing IntroAnimation import.

- [ ] **Step 3: Commit**

```bash
git -C "/Users/Dessy/Desktop/integrated solutions" add app/layout.tsx
git -C "/Users/Dessy/Desktop/integrated solutions" commit -m "feat(hero-intro): remove IntroAnimation and video preload from layout"
```

---

## Task 6: Delete Old Files

**Files to delete:**
- `components/IntroAnimation/IntroAnimation.tsx`
- `components/IntroAnimation/IntroAnimation.module.css`
- `public/videos/intro.mp4`
- `public/videos/intro-orig.mp4`

- [ ] **Step 1: Delete the files**

```bash
rm -rf "/Users/Dessy/Desktop/integrated solutions/components/IntroAnimation"
rm -f "/Users/Dessy/Desktop/integrated solutions/public/videos/intro.mp4"
rm -f "/Users/Dessy/Desktop/integrated solutions/public/videos/intro-orig.mp4"
```

- [ ] **Step 2: Confirm files are gone**

Run: `ls "/Users/Dessy/Desktop/integrated solutions/components/" | grep Intro`
Expected: Only `HeroIntro` appears (not `IntroAnimation`)

Run: `ls "/Users/Dessy/Desktop/integrated solutions/public/videos/"`
Expected: No `.mp4` files listed (directory may be empty — that's fine)

- [ ] **Step 3: Build to confirm no dangling imports**

Run: `npm run build`
Expected: Clean build, no errors

- [ ] **Step 4: Commit**

```bash
git -C "/Users/Dessy/Desktop/integrated solutions" add -A
git -C "/Users/Dessy/Desktop/integrated solutions" commit -m "feat(hero-intro): delete old IntroAnimation component and video files"
```

---

## Task 7: End-to-End Verification

No automated test setup exists in this project. Verify all requirements manually.

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in Chrome DevTools.

- [ ] **Step 2: Verify first-visit animation (desktop)**

Confirm all of the following on a first visit (sessionStorage cleared):
- Hero content is hidden on initial render
- ISG logo appears centered in the hero, fades in over ~300ms
- Logo holds for ~600ms
- Logo FLIPs toward the navbar (translates + shrinks + fades out) over 600ms
- Hero content fades in with stagger immediately after FLIP completes
- Cable animation starts after FLIP

- [ ] **Step 3: Verify sessionStorage suppression**

Open DevTools → Application → Session Storage → `http://localhost:3000`
Confirm: `isg-intro-shown` = `"1"`

Reload the page. Confirm:
- Animation does NOT play
- Hero content is immediately visible
- Cable animation starts immediately

- [ ] **Step 4: Clear sessionStorage and verify mobile skip**

In DevTools → Application → Session Storage, delete `isg-intro-shown`.

Open Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M) → Select a mobile device (e.g., iPhone 12 Pro).

Reload [http://localhost:3000](http://localhost:3000).

Confirm:
- Animation does NOT play on mobile
- Hero content is immediately visible
- `isg-intro-shown` is NOT set in sessionStorage (mobile never sets it)

- [ ] **Step 5: Verify non-homepage pages do not show animation**

Navigate to [http://localhost:3000/about](http://localhost:3000/about) (or any other page).

Confirm: No animation, no logo flash, no content hidden.

- [ ] **Step 6: Check Network tab for removed video request**

Open DevTools → Network → Filter by "Media".

Reload [http://localhost:3000](http://localhost:3000).

Confirm: No `.mp4` request appears.

- [ ] **Step 7: Commit verification note**

```bash
git -C "/Users/Dessy/Desktop/integrated solutions" commit --allow-empty -m "chore(hero-intro): verified animation end-to-end"
```

---

## Task 8: Deploy to Vercel

- [ ] **Step 1: Push to GitHub**

```bash
git -C "/Users/Dessy/Desktop/integrated solutions" push
```

- [ ] **Step 2: Wait for Vercel to deploy**

Vercel is linked to the GitHub repo and will auto-deploy on push. Monitor at [https://vercel.com/dashboard](https://vercel.com/dashboard).

Expected: Build passes, deployment succeeds.

- [ ] **Step 3: Verify on production URL**

Open the production URL (`integrated-solutions-ga.vercel.app` or the custom domain).

Clear sessionStorage via DevTools → Application → Clear site data.

Reload and confirm the animation plays exactly as it did locally.
