# Open Quant Terminal

A free-first, TradingView-inspired multi-market charting and quant research platform. This project is an independent implementation; it does not copy TradingView's proprietary source code or use unauthorized private endpoints.

## Project goals
- Interactive candlestick charts using TradingView Lightweight Charts (respect its license and attribution requirements).
- Crypto market data first, using documented public endpoints and provider adapters.
- Indicators, drawing tools, watchlists, screeners and alerts.
- Paper trading before any live trading integration.
- Historical backtesting with fees, slippage, position sizing and drawdown metrics.
- Later support for equities, FX and commodities through providers whose terms permit the intended usage.
- Responsive UI for desktop and mobile; public free platform with a modular, testable architecture.

## Proposed stack
- Frontend: React, TypeScript, Vite.
- Charting: TradingView Lightweight Charts.
- Styling: CSS/Tailwind (choose after checking the existing project needs).
- Backend: Node.js + TypeScript + Fastify when server-side features are needed.
- Database: PostgreSQL + Prisma when persistence is introduced.
- Tests: Vitest; add type checking, linting and build checks early.
- Hosting: use the owner's existing hosting; verify runtime and data-provider terms before launch.

## Phased delivery and quality gates
1. **Repository and environment** — baseline files, Node/npm versions, scripts and Git hygiene. Confirm a clean install and production build.
2. **UI shell and chart** — responsive terminal layout, symbol/timeframe controls and chart. Test desktop/mobile layouts and chart initialization.
3. **Market data adapter** — historical candles and graceful loading/error/empty states. Validate response shape, timestamps, ordering and missing data.
4. **Indicators and drawings** — add/remove indicators and basic drawing tools. Unit-test calculations and verify interactions.
5. **Watchlists and screener** — symbol search, list state and filter logic. Test empty results, invalid filters and persistence.
6. **Alerts** — threshold/rule model and trigger evaluation. Test boundary cases and duplicate-trigger protection.
7. **Paper trading** — simulated orders, positions, P&L and balances; no real funds. Test order validation, fills, fees and ledger invariants.
8. **Backtesting** — deterministic historical simulation, fees, slippage, equity curve and drawdowns. Test against hand-calculated sample fixtures and prevent look-ahead bias.
9. **More markets and data providers** — add equities/FX/commodities only after checking current availability, quotas, licensing and public redistribution terms.
10. **Hardening and release** — security review, accessibility, rate limits, observability, mobile QA and deployment smoke tests.

Each phase must end with: (1) install check, (2) typecheck/lint if configured, (3) unit tests, (4) production build, (5) manual smoke test, and (6) a short changelog noting unresolved issues. Never claim a phase passed unless the commands were actually run.

## Working rules
- Work in small commits; avoid mixing unrelated phases.
- Never commit API keys, credentials, private user data or populated production databases.
- Use environment variables for configuration; commit only a sanitized `.env.example`.
- Prefer documented, authorized APIs. Do not scrape private endpoints or reproduce proprietary code/assets.
- Free API access does not automatically allow unlimited real-time usage or redistribution; check the provider's current terms and quotas.
- Paper trading is the default. Any future live integration must be explicitly scoped and separately tested.
- Surface errors with actionable messages; never silently replace real market data with fabricated values.

## Current status
- [x] Repository checked; default branch is `main`.
- [x] Project scope and phase gates documented.
- [ ] Phase 1: inspect local environment, bootstrap the application, and establish a passing baseline.

## Phase 1: start locally (Windows 11 / VS Code)
Open the VS Code terminal in the folder where you want the project and run:

```powershell
node -v
npm -v
git --version
git clone https://github.com/Shakir120795/tradingview.git
cd tradingview
```

The repository is currently empty, so the app bootstrap is the next implementation step. Share the version command output before choosing compatible package versions. Then initialize React + TypeScript + Vite, install dependencies, and run tests/build before committing.

## License note
This repository should declare a project license before external reuse. Dependencies retain their own licenses; review them before distribution.
