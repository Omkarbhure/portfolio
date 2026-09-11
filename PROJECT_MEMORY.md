# Project Memory for Efficient AI Engineering

## 1. Project Snapshot
- Project type: Vite-based React + TypeScript portfolio/application
- Primary runtime: React 18 + TypeScript + Vite
- Styling: Tailwind CSS with shadcn-style UI primitives
- Routing: React Router DOM with page-level route composition
- State/data helpers: React Query, React Hook Form, Zod, Sonner toast system
- Current verified state: build passes, dev server runs locally, project is ready for further feature work

## 2. Core Architecture
### Application entrypoints
- `src/main.tsx` – application bootstrap
- `src/App.tsx` – router setup, global providers, route registration
- `src/index.css` – global Tailwind and app-level CSS

### Route/page model
- `src/pages/Home.tsx` – landing page
- `src/pages/Work.tsx` – work listing page
- `src/pages/ProjectDetail.tsx` – individual project detail page
- `src/pages/About.tsx` – about page
- `src/pages/Contact.tsx` – contact page
- `src/pages/Styleguide.tsx` – style guide/demo page
- `src/pages/NotFound.tsx` – catch-all fallback

### Layout and shared UI
- `src/components/layout/Layout.tsx` – shared page shell
- `src/components/layout/Header.tsx` – navigation/header behavior
- `src/components/layout/Footer.tsx` – footer content
- `src/components/ui/` – reusable UI primitives and shadcn-style components
- `src/components/ui/ProjectCard.tsx` – reusable project summary card
- `src/components/ui/TechTag.tsx` – technology tag component
- `src/components/NavLink.tsx` – utility link component
- `src/components/ScrollToTop.tsx` – route scroll reset

### Utilities and helpers
- `src/lib/utils.ts` – shared `cn` utility for class composition
- `src/hooks/use-mobile.tsx` – mobile detection hook
- `src/hooks/use-toast.ts` – custom toast hook wrapper

## 3. Key Implementation Patterns
### UI conventions
- Components are primarily function components using TypeScript.
- Tailwind utility classes are the default styling approach.
- Reusable UI primitives live under `src/components/ui/` and are composed into page-level components.
- `cn(...)` from `src/lib/utils.ts` is the main class-merging helper.

### Routing conventions
- App-level routes are registered centrally in `src/App.tsx`.
- Navigation is route-based; new pages should be added to the router and linked through `Link`/`NavLink` patterns.
- `ScrollToTop` is included at app level so route changes reset scroll position.

### Data and form handling
- `@tanstack/react-query` is available for async retrieval and caching.
- `react-hook-form` + `zod` are already in use for form validation patterns.
- Toast notifications use `sonner` plus existing wrappers/utilities.

## 4. Project-Specific Notes
### Current tech stack
- React 18.3.1
- TypeScript 5.8.3
- Vite 5.4.19
- React Router DOM 6.30.1
- Tailwind CSS 3.4.17
- Radix UI primitives for accessibility and interactions
- `lucide-react` for icons
- `recharts`, `embla-carousel-react`, `cmdk`, `react-day-picker`, and related UI libraries already installed

### Verified commands and status
- `npm install` – completed
- `npm run build` – completed successfully
- `npm run dev -- --host localhost --port 4173` – running successfully
- Local dev URL: `http://localhost:4173/`

### Known current notes
- `npm install` reported vulnerabilities in dependency tree; review with `npm audit` if dependency maintenance is needed.
- Dev server was previously restarted on port `4173` after an initial port conflict.
- This project appears to be a polished portfolio site with content and route-based sections already in place.

## 5. Efficient Workflow Guidance for Future AI Work
### Before editing
1. Start by reading only the exact file(s) relevant to the requested change.
2. Prefer extending existing components/utilities over creating new abstractions.
3. Preserve current routing, app composition, and styling conventions.
4. Reuse existing UI primitives and shared utilities where possible.

### When adding a feature
- Check whether the change belongs in a page, a reusable component, or a shared utility.
- If the behavior is reusable across pages, prefer `src/components/ui/` or `src/lib/` rather than duplicating logic.
- Keep page-level logic focused and avoid introducing unnecessary state management layers.

### When fixing a bug
- Identify the precise failing file or component before editing.
- Trace the relevant route/component dependency chain only as needed.
- Apply the smallest safe change that fixes the root cause.
- Re-run the relevant validation command after the change.

### Verification priorities
- Use `npm run build` for compile verification when changing TypeScript, routing, or shared components.
- Use `npm run lint` when code quality checks are relevant.
- Use the local dev server to visually validate UI changes when appropriate.

## 6. Minimal Editing Rules
- Do not rewrite whole files when a targeted patch suffices.
- Do not change architecture, dependencies, or unrelated behavior unless the requirement demands it.
- Keep naming, formatting, and structure aligned with the existing project.
- Favor existing patterns and components already present in the app.

## 7. Recommended Future File Targets
If a task is not obviously page-local, these are the most likely files to inspect first:
- `src/App.tsx` for routing/provider changes
- `src/pages/*` for page-level content or logic
- `src/components/ui/*` for shared reusable UI pieces
- `src/lib/utils.ts` for class/helper utilities
- `src/components/layout/*` for shared layout updates

## 8. Summary
This project is a clean, modern Vite React portfolio app with strong reusable UI conventions and a route-driven structure. The best path for future changes is to stay within the existing page/component organization, reuse shared primitives, and verify via build/lint/dev-server checks before reporting completion.
