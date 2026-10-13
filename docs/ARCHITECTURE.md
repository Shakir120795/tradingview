# Architecture Notes

## Initial shape
Start as a single frontend app and introduce backend services only when there is a concrete requirement. Keep market data behind a provider-adapter interface so vendors can be changed without rewriting charting logic.

## Planned boundaries
- `src/app`: app shell, navigation, layout.
- `src/features/chart`: chart host, symbol/timeframe state.
- `src/features/watchlist`: saved symbols and search.
- `src/features/indicators`: pure indicator calculations and rendering adapters.
- `src/features/alerts`: rule model and evaluation.
- `src/features/paper-trading`: simulated account, orders and positions.
- `src/features/backtesting`: deterministic simulator and metrics.
- `src/services/market-data`: provider interface, validation and adapters.
- `src/shared`: reusable UI, types and utilities.

These are target boundaries, not a requirement to create every folder in Phase 1. Build only what's needed and keep commits small.

## Data quality
Normalize candle data to `{ time, open, high, low, close, volume }`. Validate finite numeric values, OHLC relationships, ascending timestamps and duplicates. Convert timestamps once at the provider boundary. Handle rate limits, disconnected streams, stale data and unavailable symbols explicitly.

## Testing strategy
- Unit tests for calculations, validators, order rules and backtest metrics.
- Integration tests for provider adapters with captured fixtures (no network dependency in unit tests).
- UI smoke tests for chart mount, symbol/timeframe selection and responsive layouts.
- Build/typecheck gate on each phase.

## Security and product constraints
No secret keys in client code or repository. Use only authorized/public provider interfaces under their current terms. Public display and redistribution rights must be checked separately. Paper trading is simulated and must be labelled as such.