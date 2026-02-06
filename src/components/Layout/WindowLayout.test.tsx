import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { WindowLayout } from "./WindowLayout";

describe("WindowLayout", () => {
  it("renders header and body content", () => {
    render(
      <WindowLayout header={<div>Header</div>}>
        <p>Body</p>
      </WindowLayout>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
  });
});
