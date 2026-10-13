# Phase 1 — Repository and Environment Baseline

## Implemented
- React + TypeScript + Vite application scaffold
- Responsive initial workspace dashboard with explicit placeholder labels (no fabricated market prices)
- React error boundary and startup fallback so render failures have a visible message
- Strict TypeScript checks
- Vitest + Testing Library setup with dashboard-render smoke tests
- CI workflow runs typecheck, UI smoke tests and production build
- .gitignore excludes dependency/build output and local environment files

## Local verification
Run in PowerShell after pulling the latest main branch:

```powershell
git pull origin main
npm install
npm run typecheck
npm test
npm run build
```

Start the development server:

```powershell
npm run dev
```

Open the localhost URL printed by Vite. Verify the dashboard renders at desktop and mobile widths. If a render error occurs, the app should show the error fallback; copy the visible message for diagnosis.

## Exit criteria
- [x] App scaffold and baseline dashboard committed
- [x] Typecheck, UI smoke test and production build wired into CI
- [ ] Latest CI run completes successfully
- [ ] Latest revision runs locally and dashboard is visually confirmed
- [ ] Mobile layout checked locally
- [ ] Any observed startup/runtime errors fixed and rechecked

Phase 1 is not marked complete until the remaining verification criteria are satisfied. Phase 2 must not start before then.
