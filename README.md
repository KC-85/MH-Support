# MH Support

MH Support is a modern, accessible and UK-focused mental health information
website. It gives people a calm starting point, explains the available routes
to support in plain language and signposts users to official services in
England, Scotland, Wales and Northern Ireland.

[View the live site](https://mh-support.vercel.app/) ·
[View the GitHub repository](https://github.com/KC-85/MH-Support) ·
[Read the testing report](TESTING.md)

> [!IMPORTANT]
> MH Support provides general information and signposting. It does not diagnose
> conditions, provide treatment or replace professional healthcare advice. If
> someone is in immediate danger, call **999** or go to **A&E**.

## Table of contents

- [Project overview](#project-overview)
- [Project goals](#project-goals)
- [User experience](#user-experience)
- [Information architecture](#information-architecture)
- [Features](#features)
- [Design](#design)
- [Accessibility](#accessibility)
- [Technology](#technology)
- [Project structure](#project-structure)
- [Local development](#local-development)
- [Available scripts](#available-scripts)
- [Deployment](#deployment)
- [Content maintenance](#content-maintenance)
- [Testing](#testing)
- [Privacy and security](#privacy-and-security)
- [Known limitations](#known-limitations)
- [Future development](#future-development)
- [Credits](#credits)
- [Licence](#licence)

## Project overview

Mental health information can be difficult to navigate, especially when a
person is already distressed or overwhelmed. MH Support reduces that friction
by presenting a small number of clear choices, using direct language and
linking to the relevant official health service for each UK nation.

The current release is a front-end single-page application. It does not collect
personal information, offer diagnosis or attempt to replace professional care.
Its role is deliberately limited to information and signposting.

### Project status

The core informational release is live on Vercel. It includes:

- a responsive home page;
- a substantial UK-centred About section;
- official mental health resources for all four UK nations;
- nation-specific urgent support information;
- an emergency call-to-action;
- accessible client-side navigation; and
- a custom not-found view.

## Project goals

The project aims to:

- make the first step towards support feel manageable;
- use compassionate, non-judgemental and plain English content;
- distinguish between general information, urgent help and emergency care;
- avoid sending users to guidance intended for a different UK nation;
- use official NHS, HSC and government sources for health-service information;
- offer a clean, reassuring interface without looking clinical or childish;
- work across mobile, tablet and desktop layouts; and
- make accessibility part of the design rather than a later addition.

### Out of scope

MH Support currently does not:

- provide medical advice, diagnosis, counselling or treatment;
- maintain user accounts or health records;
- include a symptom checker or automated recommendation engine;
- provide live chat or crisis-response services;
- replace NHS 111, 999, A&E, a GP or another qualified professional; or
- guarantee that external service information will never change.

## User experience

### Intended audience

The site is intended for people in the UK who:

- want a clear introduction to mental health support;
- feel unsure about where to begin;
- need the official service for their nation;
- need urgent mental health contact information; or
- are helping a friend, relative or colleague find an appropriate next step.

### User stories

| As a… | I want to… | So that… |
| --- | --- | --- |
| First-time visitor | understand the purpose of the site immediately | I can decide whether it is relevant to me |
| Person feeling overwhelmed | see a small number of clear next steps | I am not presented with another information maze |
| UK resident | choose my nation | I reach guidance that applies where I live |
| Person needing urgent help | find the relevant telephone number quickly | I can contact an appropriate service without searching multiple sites |
| Person facing an emergency | see an unambiguous emergency instruction | I know to call 999 or go to A&E |
| Keyboard user | navigate and identify focus without a mouse | I can operate the site independently |
| Screen-reader user | use meaningful landmarks, headings and link names | I can understand and move through the content |
| Motion-sensitive user | use the site without unnecessary movement | animation does not create avoidable discomfort |
| Returning visitor | open a saved route directly | I reach the correct page after deployment |

### Content principles

The copy follows four principles:

1. **Clarity:** sentences are direct and unfamiliar terminology is avoided.
2. **Compassion:** language does not blame, diagnose or apply pressure.
3. **Specificity:** urgent and national service routes are clearly separated.
4. **Honest boundaries:** the site explains what it can and cannot provide.

## Information architecture

| Route | Purpose | Primary action |
| --- | --- | --- |
| `/` | Introduces MH Support, its approach, purpose and UK focus | Explore resources |
| `/resources` | Lists the official mental health information service for each UK nation | Open the relevant official service |
| `/urgent-support` | Provides emergency guidance and urgent contacts for each UK nation | Call the relevant service |
| Any unmatched route | Shows a helpful in-app not-found view | Return home or browse resources |

React Router manages navigation in the browser. Vercel rewrites incoming paths
to `index.html`, after which React renders the requested route. This allows
bookmarks and direct visits such as `/urgent-support` to work correctly.

## Features

### Shared interface

- A sticky header keeps the brand and urgent-help action visible.
- Desktop navigation links to the approach, About and Resources sections.
- A compact mobile header prioritises the home and urgent-help actions.
- A skip link moves keyboard users directly to the main content.
- Route changes return the viewport to the top and move focus to the new main
  landmark; hash links scroll to their intended section.
- A consistent footer repeats essential navigation and the project boundary.

### Home page

- An editorial hero introduces the service without visual clutter.
- Primary and secondary calls-to-action provide clear routes forward.
- A supportive reminder panel reduces the pressure to solve everything at once.
- A three-step section explains how the site can help.
- A detailed About section describes the purpose, UK context and limitations.
- Official national service cards link directly to recognised public services.

### Resources page

- Separate cards are provided for England, Scotland, Wales and Northern Ireland.
- Every card identifies both the nation and the official provider.
- A prominent urgent-support panel is available below the general resources.

### Urgent support page

- Emergency advice is visually separated from urgent, non-emergency support.
- A direct `tel:999` action is provided for immediate danger.
- Nation-specific cards contain the service name, instructions, telephone link
  and original official guidance.
- A clear statement explains that MH Support is a signposting service rather
  than an emergency-care provider.

### Not-found page

- Unknown client-side routes display an understandable 404 message.
- Recovery links lead to the home and Resources pages.
- The page includes a `noindex` instruction for search engines.

## Design

### Visual direction

The interface uses a restrained editorial style: generous spacing, rounded
content panels, large headings and a warm peach base. Dark plum, ink and rust
provide structure and contrast without the starkness of a pure-white medical
interface.

### Colour palette

| Token | Hex value | Main use |
| --- | --- | --- |
| Peach | `#f4c7b5` | Primary page background |
| Soft peach | `#f9dacf` | Section and hover background |
| Ink | `#2b1f26` | Main text, header/footer and primary actions |
| Plum | `#432c3a` | Dark panels and hover states |
| Muted | `#5c3f48` | Secondary text |
| Rust | `#8b3329` | Emphasis, labels and urgent actions |
| Cream | `#fff7f1` | Text and actions on dark backgrounds |

The measured core colour pairings meet WCAG AA contrast requirements. Detailed
ratios and the test method are recorded in [TESTING.md](TESTING.md#colour-contrast).

### Typography

- Body and interface text use the operating system's sans-serif stack for fast
  loading and familiar letterforms.
- Display moments use Iowan Old Style with Palatino, Book Antiqua and Georgia
  fallbacks.
- No webfont files or third-party font requests are required.

### Responsive approach

The layout is mobile-first and uses Tailwind's responsive utilities to:

- stack content and actions at narrow widths;
- introduce two-column resource grids from medium widths;
- show the full primary navigation on desktop;
- increase spacing and heading scale progressively; and
- constrain reading widths with a consistent `max-w-7xl` container.

The body has a supported minimum width of 320px.

## Accessibility

The site is designed towards WCAG 2.2 Level AA. This is a design target, not a
claim of formal certification.

Implemented measures include:

- semantic `header`, `nav`, `main`, `section`, `article`, `aside` and `footer`
  landmarks;
- one primary page heading and a logical heading hierarchy on each route;
- an early “Skip to main content” link;
- programmatic focus management after client-side route changes;
- visible three-pixel focus indicators with an offset;
- descriptive navigation and call-to-action text;
- `aria-label` values where a landmark needs a clearer accessible name;
- decorative SVGs, arrows and shapes hidden from assistive technology;
- native anchor links for telephone numbers and external resources;
- strong text/background contrast;
- primary controls with generous touch areas;
- no information communicated by colour alone;
- reduced or effectively removed transitions when `prefers-reduced-motion` is
  enabled;
- a declared document language of British English (`en-GB`); and
- page-specific titles and descriptions.

Accessibility still requires periodic testing with automated tools, keyboard
navigation and real assistive technology as the project changes. See the
[outstanding test coverage](TESTING.md#tests-not-yet-automated).

## Technology

| Technology | Version in this project | Purpose |
| --- | --- | --- |
| [React](https://react.dev/) | 19.2.8 | Component-based user interface |
| [React DOM](https://react.dev/reference/react-dom) | 19.2.8 | Browser rendering |
| [React Router](https://reactrouter.com/) | 7.18.2 | Client-side routes and links |
| [Tailwind CSS](https://tailwindcss.com/) | 4.3.3 | Utility-first styling and design tokens |
| [Tailwind Vite plugin](https://tailwindcss.com/docs/installation/using-vite) | 4.3.3 | Tailwind build integration |
| [Vite](https://vite.dev/) | 8.2.2 | Development server and production build |
| [Vercel](https://vercel.com/) | Managed platform | Hosting, HTTPS and deployments |
| Git and GitHub | — | Version control and source hosting |

Tailwind is configured through CSS using `@import "tailwindcss"` and the
`@theme` block in `src/styles/index.css`; this project does not require a
traditional `tailwind.config.js` file. The Markdown documentation is explicitly
excluded from source detection so prose that resembles a utility name does not
increase the production stylesheet.

## Project structure

```text
MH-Support/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── vercel.json
├── README.md
├── TESTING.md
├── LICENSE
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   ├── ArrowIcon.jsx
    │   ├── BrandMark.jsx
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   └── RouteFocus.jsx
    ├── data/
    │   ├── supportPathways.js
    │   ├── ukHealthServices.js
    │   └── urgentSupportServices.js
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── NotFoundPage.jsx
    │   ├── ResourcesPage.jsx
    │   └── UrgentSupportPage.jsx
    └── styles/
        └── index.css
```

### Data organisation

Repeated content is held separately from page presentation:

- `supportPathways.js` contains the three introductory pathways;
- `ukHealthServices.js` contains general national information links; and
- `urgentSupportServices.js` contains urgent service names, instructions,
  telephone links and primary sources.

This keeps repeated information consistent across routes and gives maintainers
one clear place to review time-sensitive contact details.

## Local development

### Prerequisites

- Git
- Node.js 20.19 or newer, or Node.js 22.12 or newer
- npm

Vite 8 requires those Node.js versions. Development and testing for this
release used Node.js 24.18.1 and npm 11.16.0.

### Installation

```bash
git clone https://github.com/KC-85/MH-Support.git
cd MH-Support
npm install
npm run dev
```

Vite will print the local address, normally `http://localhost:5173/`.

No environment variables, database or external API credentials are required.

### Production preview

```bash
npm run build
npm run preview
```

The compiled site is written to `dist/`. This generated directory should not
be edited by hand or committed.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot module replacement |
| `npm run build` | Creates an optimised production build in `dist/` |
| `npm run preview` | Serves the current production build locally |
| `npm audit` | Checks installed dependency metadata for reported vulnerabilities |

There is not yet a dedicated `test`, `lint` or end-to-end script. The present
manual and build checks are documented in [TESTING.md](TESTING.md).

## Deployment

### Current deployment

The production site is hosted at
[mh-support.vercel.app](https://mh-support.vercel.app/).

Vercel is connected to the GitHub repository. A production deployment can be
created from the configured production branch, while other branches or pull
requests can receive preview deployments.

### Vercel configuration

The project uses Vite's standard settings:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Install command | `npm install` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Environment variables | None required |

`vercel.json` contains a catch-all rewrite:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

The rewrite is required because React Router handles the routes after the
single HTML entry point has loaded.

### Re-deploying from a fork

1. Fork or clone the repository to a GitHub account.
2. Import the repository from the Vercel dashboard.
3. Confirm that Vercel detects the Vite framework preset.
4. Keep the default build command and `dist` output directory.
5. Deploy and test `/resources`, `/urgent-support` and an unknown path directly.

## Content maintenance

Mental health routes and telephone instructions can change. Before publishing a
content update:

1. Open the linked primary NHS, HSC or government source.
2. Confirm the nation, service name, number, availability and call instructions.
3. Update the appropriate file in `src/data/`.
4. Confirm that the visible phone text and `tel:` value agree.
5. Test the card at mobile and desktop widths.
6. Run the production build and the regression checklist in `TESTING.md`.
7. Record the review date in the pull request or release notes.

Current primary information sources:

- [NHS mental health — England](https://www.nhs.uk/mental-health/)
- [NHS inform mental health — Scotland](https://www.nhsinform.scot/mental-health/)
- [NHS 111 Wales mental health and wellbeing](https://111.wales.nhs.uk/encyclopaedia/m/article/mentalhealthandwellbeing/)
- [nidirect mental health services — Northern Ireland](https://www.nidirect.gov.uk/articles/mental-health-services-and-support)

Health-service copy should never be changed solely for visual consistency when
that would alter its practical meaning.

## Testing

The dedicated [TESTING.md](TESTING.md) file contains:

- build and dependency-audit results;
- live deployment and route checks;
- functional test cases;
- accessibility and contrast checks;
- responsive and compatibility coverage;
- external resource verification;
- resolved issues and current limitations; and
- a pre-release regression checklist.

At the latest recorded check, the production build completed successfully and
`npm audit` reported zero known vulnerabilities.

## Privacy and security

The current site:

- does not contain forms or user accounts;
- does not request or store health information;
- does not use cookies, analytics or advertising trackers;
- does not use local storage or session storage;
- does not require API keys or environment secrets; and
- sends users directly to official third-party sites when they choose a
  resource.

External organisations have their own privacy and cookie policies. Those
policies apply once a user follows an external link.

Dependency security should be reviewed regularly with `npm audit`, and package
updates should be tested before deployment.

## Known limitations

- A Vercel SPA rewrite serves `index.html` with HTTP 200 before React displays
  the in-app 404. This is sometimes called a “soft 404”. The page contains
  `noindex`, but server-rendered status codes would require a different routing
  architecture.
- The project has no automated unit, integration, accessibility or end-to-end
  test suite yet.
- No formal WCAG conformance assessment or real assistive-technology audit has
  been completed.
- Official external content can change independently of this repository and
  must be reviewed periodically.
- The site is informational and intentionally does not personalise advice.
- Tailwind CSS 4 targets modern browsers; older browser support is not a project
  requirement.

## Future development

Possible next steps include:

- automated component tests with Vitest and React Testing Library;
- end-to-end route and keyboard tests with Playwright;
- automated axe accessibility checks in continuous integration;
- scheduled external-link monitoring for time-sensitive service pages;
- a formal content-review date and owner for each support record;
- additional evidence-reviewed guides for common mental health experiences;
- local support discovery using a privacy-preserving postcode flow;
- Welsh-language content and a broader language strategy;
- richer social sharing metadata and a production canonical URL; and
- server-aware routing if true HTTP 404 responses become important.

## Credits

### Development and design

MH Support was designed and developed by
[KC-85](https://github.com/KC-85).

### Information sources

Service names, contact routes and national guidance are signposted from
official NHS, NHS inform, NHS 111 Wales and nidirect sources. MH Support is an
independent project and is not affiliated with or endorsed by those services.

### Assets

The brand mark and arrow icon are original inline SVG components. The project
uses system fonts and does not currently include third-party photographs,
illustrations or icon libraries.

### Tools and documentation

- [React documentation](https://react.dev/)
- [React Router documentation](https://reactrouter.com/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Vite documentation](https://vite.dev/guide/)
- [Vercel documentation](https://vercel.com/docs)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)

## Licence

This project is distributed under the Mozilla Public License 2.0. See
[LICENSE](LICENSE) for the complete terms.
