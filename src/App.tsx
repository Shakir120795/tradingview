const roadmap = [
  { number: "01", title: "Foundation", status: "In progress", active: true },
  { number: "02", title: "Charts & layout", status: "Next", active: false },
  { number: "03", title: "Market data", status: "Planned", active: false },
  { number: "04", title: "Indicators & tools", status: "Planned", active: false },
  { number: "05", title: "Paper trading", status: "Planned", active: false },
];

const symbols = [
  { symbol: "BTC", pair: "BTC / USDT", color: "orange" },
  { symbol: "ETH", pair: "ETH / USDT", color: "violet" },
  { symbol: "SOL", pair: "SOL / USDT", color: "blue" },
];

function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Open Quant Terminal home">
          <span className="brand-mark"><span /></span>
          <span className="brand-copy">open<span>quant</span></span>
        </a>

        <div className="nav-label">WORKSPACE</div>
        <nav className="nav-links">
          <a className="nav-link active" href="#workspace"><span className="nav-icon">⌁</span> Terminal</a>
          <a className="nav-link" href="#watchlist"><span className="nav-icon">◷</span> Watchlist</a>
          <a className="nav-link" href="#screener"><span className="nav-icon">⌕</span> Screener <span className="soon">LATER</span></a>
          <a className="nav-link" href="#alerts"><span className="nav-icon">♧</span> Alerts <span className="soon">LATER</span></a>
        </nav>

        <div className="sidebar-bottom">
          <div className="system-status"><span className="status-dot" /> System ready</div>
          <div className="version">BUILD 0.1.0 <span>·</span> PHASE 01</div>
        </div>
      </aside>

      <section className="main-area" id="workspace">
        <header className="topbar">
          <div className="breadcrumb"><span>Workspace</span><span className="crumb-slash">/</span><strong>Terminal</strong></div>
          <div className="topbar-right">
            <span className="environment-pill"><span className="tiny-dot" /> DEVELOPMENT</span>
            <button className="avatar" type="button" aria-label="Local workspace profile">OQ</button>
          </div>
        </header>

        <div className="content">
          <section className="page-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> MARKET WORKSPACE</div>
              <h1>See the market <span>clearly.</span></h1>
              <p className="page-subtitle">A focused workspace for charts, signals and quantitative research.</p>
            </div>
            <div className="phase-badge"><span className="phase-dot" /> Foundation phase</div>
          </section>

          <section className="stat-grid" aria-label="Workspace status">
            <article className="stat-card">
              <div className="stat-label">MARKET CONNECTION <span className="stat-glyph">↗</span></div>
              <div className="stat-value muted-value">Not connected</div>
              <div className="stat-foot"><span className="status-indicator neutral" /> Provider setup is upcoming</div>
            </article>
            <article className="stat-card">
              <div className="stat-label">WATCHLIST SYMBOLS <span className="stat-glyph">⌕</span></div>
              <div className="stat-value">— <span className="stat-unit">symbols</span></div>
              <div className="stat-foot">Your personal list comes next</div>
            </article>
            <article className="stat-card">
              <div className="stat-label">PAPER ACCOUNT <span className="stat-glyph">▤</span></div>
              <div className="stat-value">Not enabled</div>
              <div className="stat-foot">Simulation before live trading</div>
            </article>
          </section>

          <section className="workspace-grid">
            <article className="panel chart-panel">
              <div className="panel-heading">
                <div>
                  <div className="panel-kicker">CHART WORKSPACE</div>
                  <h2>Market chart <span className="heading-tag">PREVIEW</span></h2>
                </div>
                <div className="chart-controls" aria-label="Chart options preview">
                  <button type="button" disabled>1m</button>
                  <button type="button" disabled>15m</button>
                  <button type="button" disabled className="selected">1D</button>
                  <span className="control-divider" />
                  <button type="button" disabled aria-label="Chart settings">⚙</button>
                </div>
              </div>
              <div className="chart-stage">
                <div className="chart-grid-lines" aria-hidden="true" />
                <div className="chart-placeholder">
                  <div className="chart-emblem"><span className="candle candle-one" /><span className="candle candle-two" /><span className="candle candle-three" /><span className="candle candle-four" /></div>
                  <h3>Your chart starts here</h3>
                  <p>The chart engine and verified market data will be connected in the next phases.</p>
                  <span className="chart-state"><span className="status-indicator neutral" /> Waiting for chart engine</span>
                </div>
                <div className="axis-label axis-top">PRICE</div>
                <div className="axis-label axis-bottom">TIME</div>
              </div>
              <div className="chart-footer"><span><span className="legend-dot" /> No live data loaded</span><span>Chart module · Phase 02</span></div>
            </article>

            <article className="panel roadmap-panel">
              <div className="panel-heading">
                <div>
                  <div className="panel-kicker">PROJECT TRACKER</div>
                  <h2>Build roadmap</h2>
                </div>
                <span className="roadmap-count">01 <span>/ 05</span></span>
              </div>
              <div className="roadmap-list">
                {roadmap.map((item) => (
                  <div className={`roadmap-item ${item.active ? "roadmap-active" : ""}`} key={item.number}>
                    <div className={`roadmap-number ${item.active ? "number-active" : ""}`}>{item.active ? "✓" : item.number}</div>
                    <div className="roadmap-text"><strong>{item.title}</strong><span>{item.status}</span></div>
                    {item.active ? <span className="current-tag">NOW</span> : null}
                  </div>
                ))}
              </div>
              <div className="roadmap-note"><span className="note-icon">✳</span><p>Each phase gets a build check, type check and test pass before we move ahead.</p></div>
            </article>
          </section>

          <section className="lower-grid">
            <article className="panel watchlist-panel" id="watchlist">
              <div className="panel-heading compact-heading">
                <div><div className="panel-kicker">QUICK ACCESS</div><h2>Market watchlist</h2></div>
                <span className="coming-label">COMING SOON</span>
              </div>
              <div className="symbol-list">
                {symbols.map((item) => (
                  <div className="symbol-row" key={item.symbol}>
                    <span className={`coin-mark ${item.color}`}>{item.symbol.slice(0, 1)}</span>
                    <span className="symbol-name"><strong>{item.symbol}</strong><small>{item.pair}</small></span>
                    <span className="sample-tag">EXAMPLE</span>
                  </div>
                ))}
              </div>
              <p className="disclaimer">Example symbols only — no prices are shown until a real data provider is connected.</p>
            </article>

            <article className="panel activity-panel">
              <div className="panel-heading compact-heading">
                <div><div className="panel-kicker">SYSTEM LOG</div><h2>Recent activity</h2></div>
                <span className="live-label"><span className="status-dot" /> LOCAL</span>
              </div>
              <div className="activity-row"><span className="activity-check">✓</span><div><strong>Project workspace initialized</strong><small>Base application scaffold</small></div><time>READY</time></div>
              <div className="activity-row"><span className="activity-check">✓</span><div><strong>Quality gates documented</strong><small>Phase-by-phase validation plan</small></div><time>READY</time></div>
              <div className="activity-row muted-row"><span className="activity-wait">·</span><div><strong>Market data adapter</strong><small>Scheduled for Phase 03</small></div><time>QUEUED</time></div>
            </article>
          </section>

          <footer className="footer"><span>OPEN QUANT TERMINAL <span className="footer-sep">·</span> INDEPENDENT PROJECT</span><span>Simulated workspace · Not financial advice</span></footer>
        </div>
      </section>
    </main>
  );
}

export default App;
