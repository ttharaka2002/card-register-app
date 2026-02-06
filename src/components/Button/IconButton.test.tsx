import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("fires onClick when pressed", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<IconButton icon="←" ariaLabel="Back" onClick={handleClick} />);

    await user.click(screen.getByRole("button", { name: "Back" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
