import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Header } from "./Header";

describe("Header", () => {
  it("renders title and left action", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(
      <Header
        title="Menu"
        leftAction={{ icon: "←", ariaLabel: "Back", onClick: handleClick }}
      />
    );

    expect(screen.getByRole("heading", { name: "Menu" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Back" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
