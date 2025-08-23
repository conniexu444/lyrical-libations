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

# React Best Practices

## Component Guidelines

- Always use functional components with hooks (avoid class components)
- Follow the Single Responsibility Principle - one component, one function
- Break large components into smaller, reusable pieces to prevent over-nesting
- Use TypeScript for type safety and better developer experience
- Implement proper error boundaries to handle component failures gracefully

## Coding Standards

- Use ES6+ features: destructuring, arrow functions, template literals
- Prefer `const` and `let` over `var`
- Use meaningful, descriptive names for components, functions, and variables
- Follow camelCase for variables, PascalCase for components, SCREAMING_SNAKE_CASE for constants
- Keep functions pure when possible - avoid side effects in render methods

## Performance Rules

- Use React.memo() to prevent unnecessary re-renders of functional components
- Implement useCallback for function memoization and useMemo for expensive calculations
- Always provide unique `key` props when rendering lists (never use array index)
- Avoid inline function definitions in JSX props
- Implement code splitting with React.lazy() and Suspense for route-based code splitting
- Use list virtualization (react-window) for large datasets
- Implement lazy loading for images and non-critical components

## State Management

- Keep state as close to where it's needed as possible
- Use useState for simple local state, useReducer for complex state logic
- For global state, prefer React Context API over heavy libraries like Redux (unless truly needed)
- Avoid prop drilling - use Context or state management libraries for deeply nested data
- Always include proper dependency arrays in useEffect hooks
- Clean up subscriptions and timers in useEffect cleanup functions

## File Organization

- Group related files together: component, styles, tests, and types in same folder
- Use consistent naming: ComponentName.tsx, ComponentName.module.css, ComponentName.test.tsx
- Separate business logic from UI components using custom hooks
- Keep API calls in separate service files or custom hooks
- Maintain a clear folder structure: /components, /hooks, /services, /utils, /types

## Security & Standards

- Never expose API keys or secrets in client-side code
- Sanitize user inputs and validate data on both client and server
- Use HTTPS for all API communications
- Implement proper authentication and authorization patterns
- Follow accessibility guidelines (WCAG) - use semantic HTML, proper ARIA labels
- Test components thoroughly: unit tests, integration tests, and accessibility tests

## Development Standards

- Reference React official documentation at https://react.dev for latest best practices
- Stay updated with React 19+ features and modern patterns
- Use React DevTools for debugging and performance profiling
- Implement ESLint and Prettier for consistent code formatting
- Write comprehensive tests with Jest and React Testing Library
- Document complex components and business logic
- Use Storybook for component documentation and visual testing

## React Rules (Official)

- Follow the Rules of React for component purity and predictable behavior
- Components and hooks must be pure functions
- Don't call hooks inside loops, conditions, or nested functions
- Use Strict Mode to catch common React mistakes early
- Always handle loading and error states in data fetching
- Optimize bundle size: tree-shake unused imports, analyze bundle with tools like webpack-bundle-analyzer
