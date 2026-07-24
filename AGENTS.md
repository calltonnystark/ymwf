# AGENTS.md

This document describes the project structure for developers and AI agents working on this codebase.

## Project Overview

The marketing/informational website for Young Merit Welfare Foundation, a community welfare
non-profit in Lahore, Pakistan. Single-page site: hero, about, programs, impact stats, testimonials,
donate/get-involved, and a contact form wired to Netlify Forms.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (CSS custom properties for the color/type system) |
| Forms | Netlify Forms |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   └── __forms.html          # Static skeleton so Netlify's build bot detects the contact form
├── src
│   ├── components
│   │   ├── Nav.tsx           # Fixed header, scroll-aware, mobile menu
│   │   ├── Hero.tsx          # Landing hero with staggered entrance animation
│   │   ├── About.tsx         # Founding story
│   │   ├── Programs.tsx      # The four program cards (zig-zag layout)
│   │   ├── Impact.tsx        # Dark section with animated count-up stats
│   │   ├── Voices.tsx        # Testimonial cards
│   │   ├── Donate.tsx        # Ways-to-help cards
│   │   ├── Contact.tsx       # Netlify Forms contact form (AJAX submit)
│   │   └── Footer.tsx        # Footer with scrolling neighborhood marquee
│   ├── data
│   │   └── content.ts        # Program, testimonial, and stat copy
│   ├── hooks
│   │   └── useReveal.ts      # IntersectionObserver hook driving the .reveal scroll animations
│   ├── routes
│   │   ├── __root.tsx        # Root layout: fonts, metadata, global styles
│   │   └── index.tsx         # Assembles all page sections
│   ├── router.tsx
│   └── styles.css            # Color/type tokens, reveal-on-scroll and marquee keyframes
├── netlify.toml
├── package.json
├── tsconfig.json             # `@/*` path alias for `src/*`
└── vite.config.ts
```

## Key Concepts

### Scroll animations

`useReveal` (in `src/hooks/useReveal.ts`) attaches an `IntersectionObserver` to a ref and adds
`is-visible` once the element enters the viewport. Pair it with the `.reveal` or `.reveal-scale`
CSS classes defined in `styles.css`. All transitions respect `prefers-reduced-motion`.

### Contact form (Netlify Forms)

`src/components/Contact.tsx` submits via `fetch` to `/__forms.html` (not `/`) so the request
reaches Netlify's form-processing middleware instead of being swallowed by the SSR catch-all route.
`public/__forms.html` is a hidden static form that mirrors the same fields so Netlify's build bot
registers the form at deploy time. If you add or rename a field in the React form, update
`public/__forms.html` to match.

### Design tokens

Color and type tokens live as CSS custom properties at the top of `src/styles.css` (`--forest`,
`--terracotta`, `--marigold`, `--cream`, etc.) and are referenced directly in Tailwind arbitrary
values (e.g. `bg-[var(--forest)]`). Display type is Fraunces, body type is Work Sans, both loaded
via Google Fonts in `src/routes/__root.tsx`.

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```

## Conventions

- Components: PascalCase, one per file in `src/components/`
- Copy/content data lives in `src/data/`, not hardcoded in components
- Import paths use the `@/` alias for anything under `src/`
- Strict TypeScript; no `any`
