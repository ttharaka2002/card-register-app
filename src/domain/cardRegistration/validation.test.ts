import { validateForm } from "./validation";
import { FormState, fieldNames } from "./types";

describe("card registration validation", () => {
  it("returns required field errors for empty form", () => {
    const values: FormState = {
      [fieldNames.cardNumber]: "",
      [fieldNames.pin]: "",
      [fieldNames.expiry]: "",
    };

    const errors = validateForm(values);

    expect(errors).toEqual({
      cardNumber: "Card number is required.",
      pin: "PIN is required.",
      expiry: "Expiry is required.",
    });
  });

  it("returns no errors for filled form", () => {
    const values: FormState = {
      [fieldNames.cardNumber]: "4111111111111111",
      [fieldNames.pin]: "1234",
      [fieldNames.expiry]: "12/30",
    };

    const errors = validateForm(values);

    expect(errors).toEqual({});
  });
});
