# SEO & Performance

This site exists to rank in Google and turn visitors into phone calls and quote requests. Every technical and content decision should serve one of those two goals.

## Why this matters

Integrated Solutions of Georgia competes in local search — "TV mounting Cumming GA", "home theater installer Alpharetta", "security camera installation North Atlanta". These are high-intent searches from people ready to hire. A page that ranks and converts well is worth more than any paid ad campaign.

**The flywheel:** fast pages rank higher → higher rankings bring more traffic → more traffic means more conversions → more conversions fund better content and more pages.

---

## Performance

Google uses Core Web Vitals as a ranking signal. Keep these in the green.

**LCP (Largest Contentful Paint) — target < 2.5s**
- Always use `next/image` for content images — it serves WebP/AVIF automatically and lazy-loads off-screen images
- City hero photos must stay under 500 KB (compress with `sips -Z 1400 --setProperty formatOptions 80`)
- Navbar logo uses `fetchPriority="high"` since it is above the fold on every page
- `next.config.ts` is configured for AVIF-first serving with sensible `deviceSizes` breakpoints

**CLS (Cumulative Layout Shift) — target < 0.1**
- All `next/image` components must have explicit `width` and `height` (or use `fill` with a sized container)
- Never use raw `<img>` for content images — no sizing hints = layout shift

**INP (Interaction to Next Paint)**
- Components that have no client-side behavior must NOT carry `'use client'` — it bundles their entire dependency tree into the JS payload
- Check before adding `'use client'` to any component: does it use `useState`, `useEffect`, browser APIs, or event handlers? If not, it's a Server Component

**What to avoid**
- Raw `<img>` tags for content (use `next/image`)
- Unnecessary `'use client'` directives
- Uncompressed images over 1 MB in `/public`
- Loading large third-party scripts synchronously

---

## SEO

**Page structure**
- Every page needs a unique `<title>` and `<meta description>` in its `metadata` export
- Titles follow the template: `[Service] in [City, State] | Integrated Solutions of Georgia`
- One `<h1>` per page — it should contain the primary keyword phrase naturally
- `metadataBase` is set in `app/layout.tsx` so all OG/canonical URLs resolve correctly

**Location pages** (`/service-areas/[city-slug]`)
- These are the highest-value SEO pages on the site — one page per city we serve
- Each page must reference the city name in: title, description, h1, body copy, and the CTA
- Thin location pages rank poorly; each page should cover services offered in that city, why locals choose ISG, and a clear path to contact
- City photos should be real photos of the area, not stock

**Service pages** (`/residential/[service]`, `/commercial/[service]`)
- Target one primary keyword per page — don't spread a page thin across multiple services
- FAQs are valuable: Google surfaces FAQ content in rich results and they naturally contain long-tail keyword phrases people actually search
- Internal links from service pages to relevant city pages (and vice versa) strengthen both

**Structured data**
- `LocalBusiness` schema is the most important for this site — it signals to Google exactly what the business is, where it operates, and how to contact it
- Add `LocalBusiness` JSON-LD to `app/layout.tsx` if not already present
- Service pages can add `Service` schema; FAQ sections should use `FAQPage` schema

**Content quality**
- Google's Helpful Content system rewards pages that demonstrate Experience, Expertise, Authoritativeness, and Trust (E-E-A-T)
- Specific details outrank vague marketing: "we install Lutron Caseta and RadioRA" beats "we use premium lighting systems"
- Every service page should answer: what exactly do you do, how do you do it, who is it for, and why should I trust you

---

## Conversions

Traffic that doesn't convert is wasted. Every page should have a clear, low-friction path to contact.

- **Primary CTA:** phone call (`tel:7709127642`) — the fastest path to a lead for a local service business
- **Secondary CTA:** contact form at `/contact` — for people researching after hours
- Every service page ends with a `CtaBand` — keep the copy specific to that service, not generic
- Mobile experience matters most — the majority of local service searches happen on phones
- Trust signals (reviews, specific service details, licensing) reduce hesitation before contact

---

## Adding new pages

When adding any new page to the site:

1. Set a unique `title` and `description` in the `metadata` export
2. Include the target city or service keyword in the `<h1>`
3. Add the URL to `app/sitemap.ts`
4. Link to it from at least one other page (nav, hub page, or related service page)
5. Compress any images added to `/public` before committing
