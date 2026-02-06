import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./app";

describe("App", () => {
  it("renders the register card screen by default", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Register card form" })).toBeInTheDocument();
    expect(screen.getByText(/Welcome\s+Alex/)).toBeInTheDocument();
  });
});
