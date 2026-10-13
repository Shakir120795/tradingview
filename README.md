# Open Quant Terminal

A free-first, TradingView-inspired multi-market charting and quant research platform. This is an independent implementation; it does not copy TradingView's proprietary source code or use unauthorized private endpoints.

## Project goals
- Interactive candlestick charts using TradingView Lightweight Charts, respecting its license and attribution requirements.
- Crypto market data first, using documented public endpoints and provider adapters.
- Indicators, drawing tools, watchlists, screeners and alerts.
- Paper trading before any live trading integration.
- Historical backtesting with fees, slippage, position sizing and drawdown metrics.
- Later support for equities, FX and commodities through providers whose terms permit the intended usage.
- Responsive desktop/mobile UI and a modular, testable architecture.

## Stack
- Frontend: React, TypeScript and Vite.
- Charting: TradingView Lightweight Charts (Phase 2).
- Tests: Vitest + Testing Library; TypeScript check and production build are CI gates.
- Future backend: Node.js + TypeScript + Fastify, only when server-side features are introduced.
- Future persistence: PostgreSQL + Prisma, once user data must persist across devices.

## Phased roadmap
1. **Foundation** — repository, responsive dashboard shell, error fallback, TypeScript, smoke tests and CI.
2. **Chart workspace** — Lightweight Charts, symbol/timeframe controls and responsive chart interactions.
3. **Market data** — validated historical candles and graceful loading/error/empty states.
4. **Indicators and drawings** — indicator calculations and basic drawing tools.
5. **Watchlist and screener** — symbol search, saved lists and filter logic.
6. **Alerts** — rules, thresholds and duplicate-trigger protection.
7. **Paper trading** — simulated orders, positions, P&L, balances and fees; no real funds.
8. **Backtesting** — deterministic historical simulation, fees, slippage, equity curve and drawdowns.
9. **Additional markets** — equities/FX/commodities only after provider quotas, licensing and redistribution terms are checked.
10. **Hardening and release** — security, accessibility, observability and deployment checks.

Every phase gets a clean install, typecheck, unit tests, production build and manual smoke test. Fix failures before moving on; never report a check as passed unless it ran.

## Working rules
- Make small, phase-scoped commits.
- Never commit credentials, API keys or private data. Use a sanitized `.env.example` if configuration is needed.
- Use documented, authorized APIs; do not scrape private endpoints or reproduce proprietary source/assets.
- Free API access does not automatically permit unlimited real-time use or public redistribution. Check current provider terms and quotas.
- Label simulated data clearly. Do not invent prices or imply a data connection exists when it does not.
- Paper trading remains the default until live trading is explicitly scoped and separately tested.

## Current status
- [x] Repository and environment plan documented.
- [x] React + TypeScript + Vite foundation added.
- [x] Responsive dashboard shell and render-error fallback added.
- [x] Automated dashboard and error-fallback smoke tests added.
- [x] CI checks TypeScript, tests and production build.
- [ ] Phase 1 local visual confirmation on Windows/mobile remains pending.

## Phase 1 local commands (Windows 11 / VS Code)
Run from the existing repository folder:

```powershell
git pull origin main
npm install
npm run typecheck
npm test
npm run build
npm run dev
```

Open the localhost URL printed by Vite. The dashboard currently uses explicit placeholders; real chart and market data are Phase 2/3, not part of the foundation phase.

## License note
A project license should be selected before external reuse. Dependencies retain their own licenses; review them before distribution.
