# AI Engineering Memory

## Project Snapshot
- Project type: Vite + React + TypeScript portfolio/application frontend
- Styling: Tailwind CSS with shadcn-style UI primitives and Radix-based components
- Routing: React Router DOM with page-level route composition in `src/App.tsx`
- Primary entry points:
  - `src/main.tsx` renders the app
  - `src/App.tsx` defines routes and global providers
  - `src/pages/` contains route-specific page components
  - `src/components/ui/` contains reusable UI primitives
  - `src/components/layout/` contains layout wrappers such as `Header`, `Footer`, and `Layout`

## Key Architecture Notes
### Framework and tooling
- `package.json` scripts:
  - `npm run dev` – start Vite dev server
  - `npm run build` – production build
  - `npm run build:dev` – development build
  - `npm run lint` – ESLint validation
  - `npm run preview` – preview production bundle
- TypeScript is configured across `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`
- Vite + React SWC plugin is used for frontend tooling
- Tailwind configuration is split between `tailwind.config.ts` and `src/index.css`

### App structure
- `src/App.tsx`
  - wraps the app in `QueryClientProvider`, `TooltipProvider`, `Toaster`, and `Sonner`
  - registers all route paths
  - includes `ScrollToTop`
- `src/main.tsx`
  - bootstraps `App` into `#root`
- `src/lib/utils.ts`
  - exports shared `cn` helper (`clsx` + `tailwind-merge`)
- `src/hooks/`
  - contains reusable hooks such as mobile detection and toast helpers
- `src/components/ui/`
  - contains shadcn-style primitives and project-specific reusable UI elements like `ProjectCard`, `TechTag`, `TypingCursor`, and `CodeDivider`
- `src/pages/`
  - `Home`, `Work`, `ProjectDetail`, `About`, `Styleguide`, `Contact`, `NotFound`

### Routing and page model
The app is route-driven rather than component-heavy in a single file:
- `/` → `Home`
- `/work` → `Work`
- `/work/:slug` → `ProjectDetail`
- `/about` → `About`
- `/contact` → `Contact`
- `/styleguide` → `Styleguide`
- `*` → `NotFound`

### UI conventions
- Reusable primitives live under `src/components/ui/`
- Layout wrappers live under `src/components/layout/`
- Pages use `Layout` as the outer shell
- Prefer existing `Button`, `ProjectCard`, `TechTag`, `CodeDivider`, `CodeLabel`, and `Layout` before creating new duplicate components
- Tailwind utility classes are the default styling mechanism
- Use the `cn` helper for conditional class composition

## Verified Project Status
- `npm install` completed successfully
- `npm run build` completed successfully
- `npm run dev -- --host localhost --port 4173` was successfully used for local development
- Current local dev URL: `http://localhost:4173/`
- Existing note: dependency audit reported vulnerabilities; no project-wide remediation has been applied yet

## Recommended Validation Commands
- `npm run build`
- `npm run lint`
- `npm run dev -- --host localhost --port 4173`

## Editing Guidance for Future AI/Engineering Work
1. Start with the smallest relevant file and expand only if required.
2. Preserve the existing routing, layout, and component composition patterns.
3. When adding new features, prefer extending existing `src/components/ui/` or page-specific components rather than introducing new parallel structures.
4. Keep changes localized; avoid rewriting whole files when targeted edits will suffice.
5. Reuse `cn`, existing UI primitives, and current route/page conventions.
6. Verify with the lightest relevant command (`npm run build` or `npm run lint`) after changes.

## Reusable Engineering Prompt

### Universal Token-Efficient AI Software Engineering Prompt
You are the primary software engineering agent for this project. Your goal is to understand the existing project, correctly interpret the user's requirements, and implement the requested feature, fix, or change as a production-ready solution while minimizing unnecessary token usage, context expansion, and code changes.

1. Understand Before You Build
- Inspect only the relevant parts of the project first.
- Identify the app, framework, language, modules, and entry points that matter.
- Use project documentation and explicit user requirements as the source of truth.
- Reuse the existing architecture, patterns, conventions, and dependencies whenever appropriate.
- Avoid scanning the entire repository unless the task genuinely requires it.

2. Understand the Requirement
- Determine the exact user intent, inputs, outputs, existing behavior to preserve, and edge cases.
- If the requirement is ambiguous but can be reasonably inferred, follow the project's established behavior.
- Ask only one concise clarification if a critical requirement cannot be determined safely.

3. Plan the Smallest Correct Change
- Identify the minimum files and components that need to change.
- Trace only direct dependencies that are required.
- Prefer extending existing functionality over duplication.
- Keep changes small, focused, and backward compatible.

4. Implementation Rules
- Follow existing naming, formatting, and coding style.
- Reuse utilities, hooks, services, and components when suitable.
- Avoid duplicate logic or broad refactors.
- Preserve security, validation, accessibility, error handling, and maintainability.
- Add or update tests only when the project already has a testing structure or when meaningful verification is required.

5. Debugging
- Identify the actual failure and root cause.
- Inspect the error, stack trace, failing function, and direct dependencies.
- Apply the smallest safe fix and verify related behavior.

6. Verification
- After implementation, run the project's relevant validation methods.
- Prefer the lightest command that checks the changed behavior.

7. Token and Context Efficiency
- Read the smallest amount of information needed.
- Do not repeatedly read the same files.
- Expand context only when current information is insufficient.
- Favor targeted edits over large rewrites.

8. Output Rules
- Return the modified code or unified diff when applicable.
- Provide a concise explanation of what changed and why.
- Include verification performed and results.
- Mention any remaining risks, assumptions, or limitations only if applicable.

## Practical Notes for This Repository
- This project already contains a solid shadcn-style component library; use those components when possible.
- The app is strongly page-oriented, so new routes or sections should fit naturally into `src/pages/` and `src/components/`.
- Existing content appears to be a portfolio site structure, so maintain the current design language and tone when editing pages.
- The primary risk area for future changes is keeping new code aligned with existing UI conventions and route structure.
