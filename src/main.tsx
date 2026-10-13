import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  document.body.innerHTML = '<main style="padding:24px;font-family:system-ui;color:#e9edf5;background:#0b1018;min-height:100vh"><h1>Open Quant Terminal could not start</h1><p>Required root element #root is missing from index.html.</p></main>';
  throw new Error('Root element "#root" was not found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
