import { FormErrors, FormState } from "./types";

export const validateForm = (values: FormState): FormErrors => {
  const errors: FormErrors = {};

  if (!values.cardNumber.trim()) {
    errors.cardNumber = "Card number is required.";
  }

  if (!values.pin.trim()) {
    errors.pin = "PIN is required.";
  }

  if (!values.expiry.trim()) {
    errors.expiry = "Expiry is required.";
  }

  return errors;
};
