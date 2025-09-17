# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production (TypeScript check + Vite build)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Deployment

- `npm run predeploy` - Runs build automatically before deploy
- `npm run deploy` - Deploy to GitHub Pages

## Architecture

This is a React TypeScript SPA built with Vite, using React Router for client-side routing. The app showcases "Lyrical Libations" - appears to be an event/show series with archives.

### Key Structure

- **Routes**: Centralized in `src/routes/routes.tsx` - exports array of route objects with title, href, and React element
- **Pages**: Standard page components in `src/pages/` (Home, About, Contact, Archives, Shows, SupportUs, Edition)
- **Components**: Reusable components in `src/components/` (Nav, Footer, Timeline, etc.)
- **Routing**: App.tsx handles routing with explicit home route handling and dynamic archive routes (`/archives/:id`)

### Styling & Assets

- **CSS Framework**: Tailwind CSS v4 with custom theme variables in `src/index.css`
- **Fonts**: Custom "Neka" font for headings, Calibri for body text
- **Colors**: Custom color palette defined in CSS custom properties (--color-bg, --color-text, etc.)
- **Images**: Edition archives organized in `src/assets/Edition1/` and `src/assets/Edition2/` directories

### Data Management

- **Timeline Data**: Edition information stored in `src/assets/timelineElements.ts`
- **Archives**: Each edition has numbered image assets (LLArchive1.jpg, LLArchive2.jpg, etc.)

### Deployment

- Configured for Vercel deployment (base: "/" in vite.config.ts)
- Also supports GitHub Pages deployment