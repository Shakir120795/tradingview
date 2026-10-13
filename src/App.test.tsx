import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

afterEach(() => cleanup());

describe("Open Quant Terminal foundation", () => {
  it("renders the workspace heading and main panels", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /see the market clearly/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /market chart/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /build roadmap/i })).toBeInTheDocument();
    expect(screen.getByText(/no prices are shown until a real data provider is connected/i)).toBeInTheDocument();
  });

  it("labels the chart as a preview instead of claiming live data", () => {
    render(<App />);

    expect(screen.getByText("PREVIEW")).toBeInTheDocument();
    expect(screen.getByText(/no live data loaded/i)).toBeInTheDocument();
  });
});
