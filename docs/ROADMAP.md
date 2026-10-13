# Delivery Roadmap — Open Quant Terminal

## Required quality gate for every phase
Run clean install, typecheck/lint where configured, unit tests, production build, and a manual smoke test. Record actual results; fix errors before moving to the next phase.

| Phase | Deliverable | Exit criteria |
|---|---|---|
| 1 | Repository/environment baseline | Compatible Node/npm, scripts established, clean install/build |
| 2 | Responsive UI + chart | Chart initializes, symbol/timeframe controls work, mobile layout checked |
| 3 | Market data | Validated historical candles; graceful loading/error/empty states |
| 4 | Indicators + drawings | Indicator math tests and interaction checks pass |
| 5 | Watchlist + screener | Search/filter behavior and empty states tested |
| 6 | Alerts | Threshold boundaries and duplicate handling tested |
| 7 | Paper trading | Order validation, simulated fills, fees, positions and ledger tests pass |
| 8 | Backtesting | Deterministic fixtures, fees/slippage, equity and drawdown tests pass; no look-ahead bias |
| 9 | Multi-market providers | Current provider quotas, terms and public redistribution rights checked |
| 10 | Hardening/release | Security, accessibility, deployment smoke tests and release notes |

## Guardrails
- Independent implementation only; do not copy proprietary source code or access unauthorized private endpoints.
- Paper trading only until live-trading requirements are separately approved and tested.
- Never commit credentials. Keep `.env.example` sanitized.
- Never report tests as passing unless they were executed and their output checked.
