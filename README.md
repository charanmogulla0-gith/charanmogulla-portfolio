# Charan Mogulla — Portfolio

Personal portfolio site. Built with **Next.js 16**, **TypeScript**, **Tailwind v4**, **lucide-react**, deployed on **Vercel**.

## Stack

- Next.js 16 (App Router, Turbopack, React 19)
- TypeScript
- Tailwind CSS v4
- Inter + JetBrains Mono via `next/font`
- Lucide icons + inline brand SVGs (GitHub, LinkedIn)

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
npm run start
```

## Editing content

All copy lives in `lib/content.ts` — bio, skills, experience, projects, education, certifications, contact info. No hard-coded strings inside components.

## Deploy

Push to GitHub, then import the repo at <https://vercel.com/new>. Free tier, custom domain optional.

## Structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Composes all sections
  globals.css       # Tailwind + theme tokens
components/
  Nav.tsx           # Sticky top nav (client)
  Hero.tsx
  About.tsx
  Skills.tsx
  Experience.tsx    # Expandable timeline (client)
  Projects.tsx
  Education.tsx
  Contact.tsx       # Contact form + footer
  SectionHeader.tsx # Shared eyebrow/title block
  BrandIcons.tsx    # Inline GitHub/LinkedIn SVGs
lib/
  content.ts        # Single source of truth for portfolio data
  utils.ts          # cn() helper
```
