# Project Architecture and Status

## 1. Project Overview
This workspace is a React + TypeScript portfolio/application project built with Vite and styled using Tailwind CSS. It includes a multi-page layout with reusable UI components, route-based navigation, and shadcn-style component primitives.

## 2. Tech Stack Architecture

### Frontend Runtime
- React 18.3.1
- TypeScript 5.8.3
- Vite 5.4.19
- React Router DOM 6.30.1

### Styling and UI
- Tailwind CSS 3.4.17
- PostCSS
- Autoprefixer
- `clsx`, `tailwind-merge`, `class-variance-authority`
- Radix UI primitives for accessible UI behavior
- `lucide-react` for icons

### Component Architecture
- Reusable UI primitives under `src/components/ui/`
- Application-specific components under `src/components/`
- Layout components under `src/components/layout/`
- Pages under `src/pages/`

### App Structure
- `src/App.tsx` – main app composition
- `src/main.tsx` – application entry point
- `src/index.css` – global styles and Tailwind entry
- `src/lib/utils.ts` – shared helper utilities
- `src/hooks/` – custom hooks such as mobile detection and toast handling

### Route / Page Model
The project uses route-driven pages represented by the files in `src/pages/`:
- `Home.tsx`
- `About.tsx`
- `Work.tsx`
- `ProjectDetail.tsx`
- `Contact.tsx`
- `Styleguide.tsx`
- `NotFound.tsx`

### Data and State Layer
- React Query (`@tanstack/react-query`) for async data management
- React Hook Form (`react-hook-form`) + Zod for form handling and validation
- `sonner` and custom toast utilities for notifications

### Visualization / Display Utilities
- Recharts for charting
- Embla Carousel for carousels
- `react-day-picker`, `input-otp`, `calendar`, `command`, `popover`, `dialog`, `drawer`, `sheet`, and similar shadcn-style components for interactive UI patterns

### Tooling and Build Pipeline
- ESLint configuration via `eslint.config.js`
- TypeScript config split across `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Vite dev server and production build pipeline
- `lovable-tagger` included in dev dependencies

## 3. Architecture Summary

### High-Level Design
The app is organized as a modular frontend with:
1. A route-based page layer
2. Shared UI primitives and composite components
3. Utility and hook layers for reusable logic
4. Tailwind-based design system with accessible UI primitives
5. A Vite-powered build and development environment

### Component Relationships
- Layout components wrap the application shell.
- Page components render specific views.
- UI primitives provide consistent styling and behavior.
- Utility functions and hooks support reusability across the app.

## 4. Current Project Status

### Completed
- Dependencies have been installed successfully.
- Production build completed successfully.
- Development server is running locally.

### Verified Commands
- `npm install` ✅
- `npm run build` ✅
- `npm run dev -- --host localhost --port 4173` ✅

### Current Local Runtime
- Local dev URL: `http://localhost:4173/`

### Build Evidence
The production build completed successfully with Vite and produced the `dist/` output bundle.

### Existing Notes
- `npm install` reported 20 vulnerabilities (1 low, 4 moderate, 15 high).
- The dev server initially hit a port/bind issue on port 8080/8081, but was successfully restarted on port 4173.

## 5. Recommended Next Steps
- Review and address dependency vulnerabilities via `npm audit` / package updates.
- Run `npm run lint` to verify code quality across the project.
- Inspect the pages/components for possible UX or content refinements.
- If needed, add environment configuration for deployment or API integrations.

## 6. File Highlights
- [package.json](package.json)
- [vite.config.ts](vite.config.ts)
- [tailwind.config.ts](tailwind.config.ts)
- [src/App.tsx](src/App.tsx)
- [src/main.tsx](src/main.tsx)
- [src/pages](src/pages)
- [src/components](src/components)

## 7. Project Status Summary
Status: Functional and verified locally.

Current state:
- Build passes
- Dev server runs successfully
- Project is ready for further development, polish, or deployment preparation
