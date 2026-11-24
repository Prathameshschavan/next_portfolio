# Prathamesh Chavan — Portfolio

Personal portfolio of a frontend engineer, built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**. Every route is statically prerendered.

## Features

- **Case-study layout.** Each project is written up as problem → what I did → outcome, with a CSR-vs-SSR timing diagram and a real product screenshot.
- **Dark and light themes.** Dark is the default. A small inline script applies the saved theme before first paint, so there's no wrong-theme flash.
- **⌘K / Ctrl K command menu** (or press `/`). Built on the native `<dialog>` element with combobox semantics. Use it to jump to a section, copy the email address, download the résumé or switch the theme.
- **Accessibility:** a skip link, visible focus styles, a scroll-spy nav that sets `aria-current`, and every animation is behind `prefers-reduced-motion`.
- **SEO:** generated Open Graph image, JSON-LD `Person` schema, sitemap, robots file and web manifest.
- **Lighthouse (local production build):** 100 / 100 / 100 / 100 on desktop. On mobile, accessibility, best practices and SEO are 100, and performance is 96 to 97 depending on the run.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
npm run typecheck
```

## Editing content

All copy lives in [`src/content/profile.ts`](src/content/profile.ts): profile, metrics, about text, case studies, experience, skills and education. You don't need to touch any layout code to update the site.

To replace the résumé, swap `public/prathamesh_chavan_resume.pdf`. To replace the portrait, swap `src/assets/portrait.jpg`.

## Deploying

The site deploys to Vercel with no configuration. Set `NEXT_PUBLIC_SITE_URL` to the production URL (for example `https://yourdomain.com`) so canonical URLs, the sitemap and Open Graph links are absolute. On Vercel it falls back to the project's production domain automatically.

## Project structure

```
src/
  app/          layout, page, OG image, icon, manifest, robots, sitemap, 404
  components/   intro sidebar, case study, SSR diagram, command menu, theme, nav
  content/      profile.ts: all site copy
  assets/       portrait and project screenshot (optimised by next/image)
```
