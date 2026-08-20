# MH Support testing

This document records the checks performed on MH Support, the results obtained
and the test coverage that remains outstanding. It should be updated whenever a
feature, route, dependency or health-service contact changes.

[Return to the README](README.md) ·
[Open the live site](https://mh-support.vercel.app/)

## Table of contents

- [Test objectives](#test-objectives)
- [Test environment](#test-environment)
- [Result summary](#result-summary)
- [Build and dependency checks](#build-and-dependency-checks)
- [Route and deployment testing](#route-and-deployment-testing)
- [Functional testing](#functional-testing)
- [Accessibility testing](#accessibility-testing)
- [Responsive testing](#responsive-testing)
- [Browser compatibility](#browser-compatibility)
- [External resource verification](#external-resource-verification)
- [Resolved issues](#resolved-issues)
- [Known issues and limitations](#known-issues-and-limitations)
- [Tests not yet automated](#tests-not-yet-automated)
- [Regression checklist](#regression-checklist)

## Test objectives

Testing focuses on the areas with the greatest user impact:

- each route loads and presents the expected information;
- urgent and emergency actions remain prominent and accurate;
- internal navigation works without a full page reload;
- direct links work on Vercel;
- external links point to the correct official national service;
- layouts remain usable across common viewport sizes;
- keyboard and assistive-technology foundations are present;
- colour contrast meets the intended WCAG 2.2 AA threshold;
- reduced-motion preferences are respected; and
- the project produces a clean production build without known dependency
  vulnerabilities.

The project does not claim formal medical validation or WCAG certification.
Health information is checked against primary public-service sources, while
accessibility requires continued automated and human testing.

## Test environment

Latest recorded test date: **20 August 2026**

| Item | Tested value |
| --- | --- |
| Operating system | Linux |
| Node.js | 24.18.1 |
| npm | 11.16.0 |
| Browser automation | Google Chrome 151.0.7922.71, headless |
| Local production server | Vite preview |
| Production host | Vercel |
| Production URL | `https://mh-support.vercel.app/` |
| Source branch | `main` |

The browser version above is the environment used for the recorded rendered
route checks. It is not the full supported-browser matrix.

## Result summary

| Area | Result | Notes |
| --- | --- | --- |
| Production build | Pass | Vite transformed 36 modules and produced `dist/` |
| Dependency audit | Pass | `npm audit` reported 0 vulnerabilities |
| Live route responses | Pass | Home, Resources, Urgent Support and an unknown route returned successfully |
| Rendered route content | Pass | Expected heading content appeared on all four route cases in Chrome |
| React Router fallback | Pass | Direct route requests are handled by the Vercel rewrite |
| Core colour contrast | Pass | All measured core text pairs exceed 4.5:1 |
| Semantic/accessibility review | Pass with follow-up | Strong source-level foundation; axe and assistive-technology audits remain outstanding |
| Official source review | Pass with caveat | Primary URLs are correct; NHS inform blocks some automated requests |
| Automated unit/E2E suite | Not configured | Recommended for the next development phase |

## Build and dependency checks

### Production build

Command:

```bash
npm run build
```

Recorded result:

```text
vite v8.2.2 building client environment for production...
✓ 36 modules transformed.
dist/index.html                   0.99 kB │ gzip:  0.46 kB
dist/assets/index-BYxY4gHw.css   28.53 kB │ gzip:  5.79 kB
dist/assets/index-DHGUh4p3.js   254.46 kB │ gzip: 78.94 kB
✓ built successfully
```

The hashed asset names can change between builds. Their presence, root-relative
paths and successful build are the relevant assertions.

### Dependency security

Command:

```bash
npm audit --audit-level=low
```

Recorded result:

```text
found 0 vulnerabilities
```

This result describes the npm advisory database at the time of the test. It is
not a permanent guarantee; the audit should be repeated before releases.

### Whitespace check

Command:

```bash
git diff --check
```

Expected result: no output and exit code 0. This is rerun after documentation
changes to catch trailing whitespace and malformed patch lines.

## Route and deployment testing

### Live HTTP checks

The deployed routes were requested directly rather than reached only through
in-app navigation.

| URL | HTTP result | Expected behaviour | Result |
| --- | ---: | --- | --- |
| `/` | 200 | Vercel serves the application entry point | Pass |
| `/resources` | 200 | Direct request reaches the Resources route | Pass |
| `/urgent-support` | 200 | Direct request reaches the Urgent Support route | Pass |
| `/not-a-real-page` | 200 | Vercel serves the SPA; React displays the noindex not-found view | Pass, with soft-404 limitation |

### Rendered route checks

The production build was served with `npm run preview`. Headless Chrome loaded
each route and the rendered DOM was checked for route-specific content.

| Route | Expected rendered text | Result |
| --- | --- | --- |
| `/` | “Support that feels within reach.” | Pass |
| `/resources` | “Trusted information, without the search spiral.” | Pass |
| `/urgent-support` | “Help is available right now.” | Pass |
| `/not-a-real-page` | “This page isn’t here.” | Pass |

### Vercel fallback

`vercel.json` rewrites every incoming path to `/index.html`. This is expected
for a React Router single-page application and was confirmed by direct requests
to the nested production routes.

The trade-off is that an unmatched path initially receives HTTP 200. React then
renders the custom not-found page and supplies a `noindex` meta instruction.

## Functional testing

The following scenarios were reviewed through the rendered application and the
corresponding source implementation.

### Shared header and navigation

| Test | Expected result | Result |
| --- | --- | --- |
| Select the brand link | Navigate to `/` | Pass |
| Select “How we help” | Navigate to `/#approach` and scroll to the section | Pass |
| Select “About us” | Navigate to `/#about` and scroll to the section | Pass |
| Select “Resources” | Render `/resources` | Pass |
| Select “Urgent help” | Render `/urgent-support` | Pass |
| View below the `md` breakpoint | Full desktop navigation is hidden; brand and urgent action remain | Pass |
| Scroll the page | Header remains available at the top of the viewport | Pass |

### Home page

| Test | Expected result | Result |
| --- | --- | --- |
| Load `/` | Hero, values, approach and About content render | Pass |
| Select “Find your next step” | Navigate to `/resources` | Pass |
| Select “Why MH Support?” | Move to the About section | Pass |
| Review support pathways | Three ordered items are shown in sequence | Pass |
| Review national cards | All four UK nations and official providers are shown | Pass |
| Select a national card | Open the matching official public-service page | Pass with external-site caveat |

### Resources page

| Test | Expected result | Result |
| --- | --- | --- |
| Load `/resources` directly | Resources heading and four national service cards render | Pass |
| Review card labels | Nation and provider are identifiable without relying on colour | Pass |
| Select “Find urgent support” | Navigate to `/urgent-support` | Pass |

### Urgent support page

| Test | Expected result | Result |
| --- | --- | --- |
| Load `/urgent-support` directly | Urgent introduction, emergency panel and four national cards render | Pass |
| Review emergency panel | “Call 999 or go to A&E” is clearly separated from urgent advice | Pass |
| Select “Call 999” | Browser/device receives `tel:999` | Pass by link inspection |
| Review each nation | Correct service, phone display and instructions are present | Pass against listed sources |
| Select a national call action | Browser/device receives the matching `tel:` value | Pass by link inspection |
| Select “Official guidance” | Open the corresponding primary source | Pass with external-site caveat |
| Review Wales action | Visible instructions explain that option 2 is required | Pass |

Telephone links cannot place a call in a desktop/headless test environment.
Their values and visible instructions were therefore inspected, but placing a
real call was deliberately not part of testing.

### Footer

| Test | Expected result | Result |
| --- | --- | --- |
| Select footer brand | Navigate home | Pass |
| Select footer resource links | Navigate to Resources, Urgent Support or About | Pass |
| Inspect copyright | Current year is generated at runtime | Pass |

### Not-found handling

| Test | Expected result | Result |
| --- | --- | --- |
| Open an unknown route | Render the custom “This page isn’t here” view | Pass |
| Select “Return home” | Navigate to `/` | Pass |
| Select “Browse resources” | Navigate to `/resources` | Pass |
| Inspect page metadata | A `noindex` meta instruction is present | Pass |

## Accessibility testing

### Semantic and source review

| Check | Evidence | Result |
| --- | --- | --- |
| Document language | `lang="en-GB"` on the root HTML element | Pass |
| Page titles | Route-specific `<title>` elements | Pass |
| Landmarks | Header, labelled navigation, main and footer are present | Pass |
| Main heading | Each route has a visible `h1` | Pass |
| Heading associations | Major sections use `aria-labelledby` where appropriate | Pass |
| Skip navigation | First interactive element targets `#main-content` | Pass |
| Route focus | `RouteFocus` focuses main content after pathname changes | Pass by implementation review |
| Hash navigation | `RouteFocus` scrolls to a valid target when a hash is present | Pass by implementation review |
| Focus visibility | Global 3px focus-visible outline with 3px offset | Pass by implementation review |
| Keyboard-compatible controls | Navigation, cards and calls use native anchors/links | Pass by implementation review |
| Decorative content | Brand SVG, arrow SVG and decorative shapes are hidden from assistive technology | Pass |
| Named navigation | Primary and footer navigation have accessible labels | Pass |
| Motion preference | Reduced-motion query removes smooth scrolling and shortens transitions | Pass by implementation review |
| Colour-only meaning | Links and urgent actions include visible text and structural context | Pass |
| Target sizing | Primary controls use at least 44px or 48px minimum height; compact footer links retain spacing | Pass by implementation review |

The items marked “implementation review” should later be repeated with a full
keyboard session and assistive technology. Source semantics support those
behaviours but do not replace user testing.

### Colour contrast

Contrast was calculated from the hexadecimal theme tokens using the WCAG
relative-luminance formula. WCAG AA requires at least 4.5:1 for normal text and
3:1 for large text.

| Foreground | Background | Ratio | AA normal text |
| --- | --- | ---: | --- |
| Ink `#2b1f26` | Peach `#f4c7b5` | 10.31:1 | Pass |
| Muted `#5c3f48` | Peach `#f4c7b5` | 6.06:1 | Pass |
| Ink `#2b1f26` | Soft peach `#f9dacf` | 12.03:1 | Pass |
| Muted `#5c3f48` | Soft peach `#f9dacf` | 7.06:1 | Pass |
| Cream `#fff7f1` | Plum `#432c3a` | 11.94:1 | Pass |
| Cream `#fff7f1` | Rust `#8b3329` | 7.62:1 | Pass |
| Peach `#f4c7b5` | Ink `#2b1f26` | 10.31:1 | Pass |
| Cream `#fff7f1` | Ink `#2b1f26` | 14.94:1 | Pass |
| Rust `#8b3329` | Peach `#f4c7b5` | 5.26:1 | Pass |
| Rust `#8b3329` | Soft peach `#f9dacf` | 6.13:1 | Pass |

Opacity-based secondary text was visually reviewed during implementation, but
future automated contrast regression tests are recommended because blending can
vary with the underlying panel colour.

### Keyboard expectations

The intended keyboard sequence is:

1. Skip link
2. Header brand
3. Visible primary navigation links
4. Urgent-help action
5. Page-specific actions and resource cards
6. Footer brand and navigation

Every interactive element is a native link; there are no custom JavaScript
buttons, drag interactions or keyboard traps in the current release.

### Reduced motion

When the operating system requests reduced motion:

- smooth scrolling is disabled; and
- transition durations are reduced to `0.01ms`.

This is implemented in `src/styles/index.css` using
`@media (prefers-reduced-motion: reduce)`.

## Responsive testing

The interface was visually reviewed at mobile and desktop sizes during
implementation. In addition, the responsive utility rules were checked for the
following layout transitions.

| Area | Narrow viewport | Wider viewport | Result |
| --- | --- | --- | --- |
| Header | Brand and compact urgent action | Full primary navigation and urgent action | Pass |
| Hero | Text and reminder panel stack | Two-column layout | Pass |
| Primary actions | Stack vertically | Align horizontally | Pass |
| Values list | Divided vertical list | Three horizontal columns | Pass |
| Approach steps | Stacked list | Three columns | Pass |
| About cards | Stacked panels | Two-column panel | Pass |
| Resource cards | Single column | Two columns | Pass |
| Urgent card actions | Stack when needed | Align in a row where space allows | Pass |
| Footer | Stacked content | Two aligned columns | Pass |

The CSS supports a minimum body width of 320px. Real-device testing on iOS and
Android remains recommended before a larger public launch.

## Browser compatibility

### Tested

| Browser | Version | Scope | Result |
| --- | --- | --- | --- |
| Google Chrome on Linux | 151.0.7922.71 | Production build and rendered route content | Pass |

### Target baseline

Tailwind CSS 4 is designed for modern browsers, with an official baseline of
Chrome 111+, Safari 16.4+ and Firefox 128+. These are project targets, not a
claim that every browser/version combination has been manually tested.

Manual testing is still required on:

- Safari on macOS and iOS;
- Firefox desktop;
- Chrome on Android;
- Windows high-contrast mode; and
- browser zoom at 200% and 400%.

## External resource verification

Service information was reviewed against the official pages listed below on
20 August 2026.

| Nation | General source | Urgent source | Review result |
| --- | --- | --- | --- |
| England | [NHS mental health](https://www.nhs.uk/mental-health/) | [Where to get urgent help](https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/) | Content confirms NHS 111 and the mental health option |
| Scotland | [NHS inform mental health](https://www.nhsinform.scot/mental-health/) | [Get urgent mental health help](https://www.nhsinform.scot/illnesses-and-conditions/mental-health/mental-health-support/get-urgent-mental-health-help) | Official URLs retained; automated requests were blocked with HTTP 403, so periodic manual browser review is required |
| Wales | [NHS 111 Wales mental health](https://111.wales.nhs.uk/encyclopaedia/m/article/mentalhealthandwellbeing/) | Same primary source | Content confirms 111, option 2, 24 hours a day |
| Northern Ireland | [Mental health services and support](https://www.nidirect.gov.uk/articles/mental-health-services-and-support) | [Crisis or despair guidance](https://www.nidirect.gov.uk/articles/mental-health-emergency-if-youre-crisis-or-despair) | Official nidirect pages load and identify crisis routes including Lifeline |

Important maintenance rules:

- A successful HTTP response proves availability, not clinical accuracy.
- Automated failure can be caused by anti-bot protection rather than a broken
  user-facing page.
- Telephone instructions must always be compared with visible primary-source
  content before release.
- Emergency and urgent information should be reviewed more frequently than
  general design content.

## Resolved issues

### GitHub Pages base path

**Issue:** The initial deployment configuration built assets under
`/MH-Support/`, which was appropriate for GitHub Pages but not for a Vercel root
deployment.

**Resolution:** The conditional Vite base path was removed. Production assets
now use root-relative paths such as `/assets/...`.

### Direct SPA routes

**Issue:** A static host can return a platform 404 when a visitor opens
`/resources` or `/urgent-support` directly.

**Resolution:** A catch-all Vercel rewrite now serves `index.html`, allowing
React Router to render the requested route.

### GitHub Pages redirect workaround

**Issue:** `public/404.html` and a query-string recovery script were specific to
GitHub Pages and added unnecessary routing complexity on Vercel.

**Resolution:** Both were removed when the project migrated to Vercel.

## Known issues and limitations

### Soft 404 response

Unknown routes receive the application shell with HTTP 200 because of the SPA
rewrite. React displays an appropriate not-found page and `noindex` metadata,
but the server cannot return a true 404 without server-aware routing.

### External service ownership

NHS, HSC and government pages can move or change without notice. Centralised
data files make updates easier, but they do not remove the need for scheduled
human review.

### Telephone testing

`tel:` actions depend on the user's device and calling software. Their values
were inspected, but no test calls were placed.

### Accessibility coverage

The semantic structure, contrast and motion preference were reviewed. A formal
audit with axe, Lighthouse, NVDA, VoiceOver or another screen reader has not yet
been completed.

### Browser coverage

The recorded automated render uses Chrome on Linux. Other modern browsers are
targets but have not yet been added to a repeatable test matrix.

## Tests not yet automated

The repository currently has no `test` or `lint` script. Recommended additions
are:

### Unit and component tests

Use Vitest and React Testing Library to verify:

- every national record renders once;
- urgent telephone links match their data records;
- shared navigation has the expected labels and destinations;
- the current year renders in the footer;
- the not-found page exposes recovery links; and
- RouteFocus handles pathname and hash changes.

### End-to-end tests

Use Playwright to verify:

- direct production-style routing;
- header, page and footer navigation;
- keyboard order and skip-link behaviour;
- mobile and desktop breakpoints;
- page titles after navigation;
- reduced-motion emulation; and
- the visible result for an unknown route.

### Automated accessibility

Add axe-core to the end-to-end suite and run it against every route. Automated
checks should be supplemented with manual keyboard, zoom, high-contrast and
screen-reader testing.

### Continuous integration

A future GitHub Actions workflow should run:

1. clean dependency installation;
2. linting;
3. unit and component tests;
4. production build;
5. Playwright route tests; and
6. automated accessibility checks.

## Regression checklist

Run this checklist before a production release or after changing service data.

### Content and safety

- [ ] Confirm that the 999 emergency instruction remains visible and accurate.
- [ ] Check every urgent phone number and calling instruction against its
      official source.
- [ ] Confirm that each service is assigned to the correct UK nation.
- [ ] Confirm that the informational-not-medical-advice boundary remains clear.
- [ ] Review tone for plain language, care and non-judgemental wording.

### Navigation and functionality

- [ ] Open `/`, `/resources` and `/urgent-support` directly.
- [ ] Open an unknown path and confirm the custom not-found view.
- [ ] Test every header and footer link.
- [ ] Test the approach and About hash links.
- [ ] Inspect all `tel:` values.
- [ ] Open every official resource and guidance link.
- [ ] Confirm page titles and descriptions are route-appropriate.

### Accessibility

- [ ] Complete the site using only the keyboard.
- [ ] Confirm the skip link is visible when focused and moves to main content.
- [ ] Confirm focus remains clearly visible on every control.
- [ ] Check heading order and landmark names.
- [ ] Run axe or an equivalent automated accessibility scan on every route.
- [ ] Test at 200% and 400% zoom.
- [ ] Test with reduced motion enabled.
- [ ] Test in Windows high-contrast or forced-colours mode.
- [ ] Complete at least one screen-reader pass.

### Responsive and browser checks

- [ ] Inspect the site at 320px width.
- [ ] Inspect representative mobile, tablet, laptop and wide desktop widths.
- [ ] Test current Chrome, Firefox and Safari releases.
- [ ] Test a touch device and confirm actions are comfortably selectable.
- [ ] Check for overflow, clipped focus rings and overlapping sticky content.

### Release checks

- [ ] Run `npm install` from the lockfile in a clean environment.
- [ ] Run `npm audit` and review all findings.
- [ ] Run `npm run build`.
- [ ] Run `git diff --check`.
- [ ] Preview the production build locally.
- [ ] Review the Vercel preview deployment before promoting to production.
- [ ] Repeat direct-route checks after deployment.
