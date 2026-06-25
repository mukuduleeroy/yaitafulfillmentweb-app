# Yaita Fulfillment Website

Yaita Fulfillment is a Next.js website for Yaita's e-commerce fulfillment offering in Zimbabwe. The site is structured around thin app routes, section-based page components, shared UI primitives, and central homepage content data.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Clone The Project

```bash
git clone <repository-url>
cd yaita-web
```

Replace `<repository-url>` with the Git URL for this repository.

## Set Up Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the site in your browser:

```text
http://localhost:3000
```

## Useful Commands

```bash
npm run dev
```

Runs the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after a build.

```bash
npm run lint
```

Runs ESLint checks.

## Project Structure

```text
yaita-web/
|-- public/
|   `-- assets/
|       |-- laptop-hero.png
|       |-- yaita-fulfillment-visual.jpeg
|       |-- yaita-logo.webp
|       `-- yaita-phone-orders.png
|
|-- src/
|   |-- app/
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |
|   |-- components/
|   |   |-- Header.tsx
|   |   |-- Footer.tsx
|   |   |
|   |   |-- sections/
|   |   |   |-- FeatureSpotlights/
|   |   |   |   |-- FeatureSpotlights.tsx
|   |   |   |   `-- index.ts
|   |   |   |-- FinalCta/
|   |   |   |   |-- FinalCta.tsx
|   |   |   |   `-- index.ts
|   |   |   |-- Hero/
|   |   |   |   |-- Hero.tsx
|   |   |   |   `-- index.ts
|   |   |   |-- Integrations/
|   |   |   |   |-- Integrations.tsx
|   |   |   |   `-- index.ts
|   |   |   |-- Pipeline/
|   |   |   |   |-- Pipeline.tsx
|   |   |   |   `-- index.ts
|   |   |   |-- Pricing/
|   |   |   |   |-- Pricing.tsx
|   |   |   |   `-- index.ts
|   |   |   |-- SocialProof/
|   |   |   |   |-- SocialProof.tsx
|   |   |   |   `-- index.ts
|   |   |   `-- index.ts
|   |   |
|   |   `-- ui/
|   |       |-- Button.tsx
|   |       |-- Card.tsx
|   |       `-- SectionHeading.tsx
|   |
|   |-- data/
|   |   `-- home.ts
|   |
|   |-- lib/
|   |   `-- utils.ts
|   |
|   `-- types/
|       `-- index.ts
|
|-- .gitattributes
|-- .gitignore
|-- next.config.ts
|-- package.json
|-- postcss.config.mjs
`-- tsconfig.json
```

## Development Notes

- Keep `src/app/page.tsx` thin. It should compose page sections, not contain full section UI.
- Put homepage section content in `src/data/home.ts`.
- Put reusable visual primitives in `src/components/ui/`.
- Put large page areas in `src/components/sections/`.
- Use `@/` imports for source files. The alias points to `src/`.
- Line endings are enforced as LF through `.gitattributes`.
