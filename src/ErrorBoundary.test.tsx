import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ErrorBoundary from "./ErrorBoundary";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

function BrokenComponent(): never {
  throw new Error("Test render failure");
}

describe("ErrorBoundary", () => {
  it("shows a readable fallback when a child fails to render", () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);

    render(
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByRole("heading", { name: /workspace failed to render/i })).toBeInTheDocument();
    expect(screen.getByText("Test render failure")).toBeInTheDocument();
  });
});
