import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryProps = { children: ReactNode };
type ErrorBoundaryState = { hasError: boolean; message: string };

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, message: "" };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error.message || "Unknown rendering error" };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Open Quant Terminal render error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{ minHeight: "100vh", background: "#0b1018", color: "#e9edf5", padding: 32, fontFamily: "system-ui, sans-serif" }}>
          <h1 style={{ color: "#a3e635" }}>Workspace failed to render</h1>
          <p>The app caught a rendering error instead of showing a blank page.</p>
          <pre style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere", color: "#ffb4b4", background: "#151d29", border: "1px solid #344155", borderRadius: 8, padding: 16 }}>{this.state.message}</pre>
          <p>Copy this error and share it so it can be fixed before Phase 2.</p>
        </main>
      );
    }

    return this.props.children;
  }
}
