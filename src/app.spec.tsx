import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./app";

describe("App", () => {
  it("renders the app shell placeholder", () => {
    render(<App />);

    expect(screen.getByText("App shell ready.")).toBeInTheDocument();
  });
});
