# SEO audit: Decorazon Joss

**Audit date:** 2026-10-23  
**Scope:** Source-code review of this Astro project. A public production domain was not present in the repository or supplied with the request, so live crawl, indexation, robots.txt, sitemap, backlinks, and field performance could not be verified. Search-engine lookup for the brand did not identify a confirmed matching site. This is an implementation audit, not a live-site score.

## Executive summary

The site has a clear local service offering in Spanish, useful service descriptions, contact details, a portfolio, and image descriptions. The main SEO gaps are duplicated page metadata, no declared production origin or sitemap/robots implementation, weak/placeholder social profiles, and a portfolio experience whose filter state and image cards depend on client-side JavaScript.

**Indicative code-based SEO score: 58/100.** This is a directional score based on visible source only; it does not include live crawling, performance measurement, Google Search Console, or backlink data.

| Area | Score | Evidence |
|---|---:|---|
| Technical foundations | 10/22 | Spanish document language and responsive viewport exist; canonical, robots, sitemap, and production site origin are absent from the inspected source. |
| Content quality | 16/23 | Spanish service content, founder story, location and portfolio are present; little first-hand detail, proof, or project context is visible. |
| On-page SEO | 11/20 | Homepage has one descriptive H1 and a broad description; homepage and portfolio share the same title/description. |
| Structured data | 1/10 | No JSON-LD or other structured data found. |
| Performance | 6/10 | Local WebP assets and lazy loading appear in use; no lab or field metrics were available. |
| AI search readiness | 8/10 | Clear Spanish headings and service descriptions; no crawl policy review, entity markup, or independent brand citations verified. |
| Images | 6/5 | Descriptive alt text appears on key images and WebP assets are used; several portfolio alts are English or do not match their titles. Score capped at category weight. |

## Findings and priorities

### High: Give each indexable page unique metadata

The shared `src/layouts/Layout.astro` sets the same title and description on every page. The homepage and `/Portfolio` therefore have duplicate search snippets, and the portfolio title does not describe its content.

**Action:** Add page-level title and description support to the layout, then set distinct Spanish metadata for the homepage and portfolio. Include a canonical URL only after the production domain is confirmed. Keep titles specific and natural; for example:
- Home: “Decoración de eventos en Alajuela | Decorazon Joss”
- Portfolio: “Portafolio de decoración de eventos | Decorazon Joss”

### High: Confirm the production domain and publish crawl files

No `site` origin, `robots.txt`, or sitemap is present in the inspected configuration/files. Without a stable domain, canonical URLs and sitemap entries cannot be safely generated.

**Action:** Set Astro's `site` to the verified HTTPS production origin; add a sitemap integration or generated sitemap and a `public/robots.txt` that points to it. Verify both URLs return successfully and that the sitemap includes only canonical, indexable pages. Do not publish temporary ngrok/loca.lt hosts as canonical URLs.

### High: Replace generic social links with the real profiles

The social links in `src/components/Footer.astro` and `src/components/History.astro` point to generic Instagram and Facebook homepages. These do not establish the business's identity or help visitors reach its profiles.

**Action:** Replace these hrefs with the owner's verified business profiles, or remove the links until verified. Use the same business name, location, and contact details across the site and profiles.

### Medium: Make portfolio content robust to disabled or delayed JavaScript

The portfolio items are rendered by a React component with `client:load`; category filtering and the cards are inside that hydrated component. Search engines can render JavaScript, but relying on hydration for the primary portfolio content adds avoidable rendering risk and delays content visibility.

**Action:** Prefer rendering the portfolio cards as Astro/static HTML and keep client-side filtering as progressive enhancement, or verify the production rendered HTML contains all card titles and image URLs without requiring interaction. Avoid creating crawlable filter URLs unless each filter page has distinct, useful content.

### Medium: Improve image text and loading hints

Images have alt attributes, but several portfolio descriptions are English while titles are Spanish, and some descriptions are generic or mismatched (for example, some alt text names a different theme than the title). The homepage hero marks its image high priority; portfolio images have no explicit lazy-loading policy.

**Action:** Write concise, accurate Spanish alt text describing the visible decoration, not keyword lists. Use empty alt text only for decorative images. Lazy-load below-the-fold portfolio images and reserve eager/high-priority loading for the actual LCP image. Check intrinsic dimensions/aspect ratios to reduce layout shift.

### Medium: Strengthen first-hand business information

The homepage describes services and says the business was founded in 2015, but the available copy has little concrete project detail or evidence supporting experience. The claim “Empresa líder” is broad and unsupported in the visible content.

**Action:** Add specific, verifiable experience: service-area boundaries, what setup/teardown includes, planning process, materials or customization options, and short case examples with event type and location (with client permission). Replace unsupported superlatives with factual statements. Keep the phone, email, and Alajuela location consistent with the verified business profiles.

### Medium: Add appropriate structured data

No structured data was found. A local event-decoration service can use `LocalBusiness` or the closest accurate `HomeAndConstructionBusiness`/service subtype, plus `Organization` or `WebSite` where applicable. Do not invent a street address, opening hours, price range, or sameAs links.

**Action:** Once business details and production URL are confirmed, add JSON-LD with name, URL, logo, telephone, email, area served, and verified social profile URLs. Validate the rendered markup with Google's Rich Results Test and Schema.org Validator. Do not add FAQPage markup for Google rich-result eligibility to this commercial site; FAQ content can still help visitors and answer engines without FAQ schema.

### Low: Improve content discoverability and semantics

The site has two main routes and a single portfolio page. Existing headings are generally descriptive, though the portfolio title could better target the service and geography. The portfolio navigation uses `/Portfolio` with uppercase path; normalize internal links to lowercase `/portfolio` (or redirect consistently if deployed) to avoid duplicate path variants.

**Action:** Use one canonical lowercase route, descriptive section headings, and links between relevant service descriptions and the portfolio. Add project captions that communicate occasion, theme, and service location where accurate.

## Checks that could not be completed

- **Live crawl and HTTP status:** No confirmed public production URL was supplied.
- **Robots, sitemap, canonical behavior, redirects, TLS, and indexation:** Not verifiable without the production domain.
- **Core Web Vitals (LCP, INP, CLS):** No PageSpeed Insights/CrUX or browser measurement was run. Source inspection alone cannot establish CWV status.
- **Backlinks, search queries, and rankings:** No Search Console, analytics, or backlink data was available.
- **Local pack / Google Business Profile:** The project shows Alajuela and a phone number, but no matching verified profile was identified.
- **Actual image-to-alt accuracy:** The source labels were reviewed, but every image was not visually inspected.

## Suggested order of work

1. Confirm the production domain, then configure `site`, canonical URLs, robots.txt, and sitemap.
2. Add page-specific metadata for the home and portfolio routes.
3. Replace placeholder social links with verified profiles and align business identity details.
4. Improve portfolio image alts and make rendered cards available without depending on hydration.
5. Add verified local business structured data and strengthen first-hand service/project information.
6. Measure the live pages with PageSpeed Insights and review Search Console indexation/query data.

**Skipped:** No code changes, live CWV test, Google Search Console review, or full visual inspection; these require a confirmed deployed domain or connected account.  
**Risk:** The score and recommendations are based on repository source and may differ from production behavior.

