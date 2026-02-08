import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RegisterCardScreen } from "./RegisterCardScreen";

describe("RegisterCardScreen", () => {
	it("shows validation messages when submitting empty form", async () => {
		const user = userEvent.setup();
		const handleSubmit = jest.fn();

		render(<RegisterCardScreen user={{ firstName: "Alex" }} onSubmit={handleSubmit} />);

		await user.click(screen.getByRole("button", { name: "Submit" }));

		expect(screen.getByText("Card number is required.")).toBeInTheDocument();
		expect(screen.getByText("PIN is required.")).toBeInTheDocument();
		expect(screen.getByText("Expiry is required.")).toBeInTheDocument();
		expect(handleSubmit).not.toHaveBeenCalled();
	});
});
