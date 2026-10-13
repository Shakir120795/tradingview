# Phase 1 — Repository and Environment Baseline

## Added to the repository
- React + TypeScript + Vite application scaffold
- Strict TypeScript compiler checks
- Separate `typecheck` and production `build` scripts
- Responsive initial workspace UI with clearly labelled placeholders
- `.gitignore` entries for dependencies, build output and local environment files

## Local verification (pending user execution)
Run in PowerShell after pulling the latest `main` branch:

```powershell
git pull origin main
npm install
npm run typecheck
npm run build
```

Then start the local development server:

```powershell
npm run dev
```

Open the localhost URL printed by Vite. Check that the workspace loads, there are no red errors in the browser console, and the layout works at desktop and mobile widths.

## Exit criteria
- [ ] `npm install` completes successfully
- [ ] `npm run typecheck` exits with code 0
- [ ] `npm run build` exits with code 0
- [ ] Local page loads without console/runtime errors
- [ ] Mobile layout checked
- [ ] Any errors fixed and rerun before Phase 2

No local build or browser test is claimed as passed until the commands are run on the development machine.
