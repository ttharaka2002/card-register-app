import React, { useMemo, useState } from "react";
import { User } from "../../types/user";
import * as styles from "./RegisterCardScreen.scss";

type RegisterCardScreenProps = {
  user: User;
  onSubmit: () => void;
};

type FormState = {
  cardNumber: string;
  pin: string;
  expiry: string; 
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  cardNumber: "",
  pin: "",
  expiry: "",
};

const validateForm = (values: FormState): FormErrors => {
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

export const RegisterCardScreen = ({ user, onSubmit }: RegisterCardScreenProps) => {

  //useState for this simple form with local validation. Next level- when more fields or rules, move to useReducer or React Hook Form
  //Validation & UX next levels:
  // - Add validation rules (e.g. card number format, PIN length) ,Masking/formatting: card number grouping, expiry auto‑slash,
  // Show success message on successful submission, Field-level validation on blur ,etc.
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm(values);
    setErrors(validationErrors);
    setSubmitted(true);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit();
    }
  };

  const showError = (field: keyof FormState) => submitted && Boolean(errors[field]);

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
    >
      <p className={styles.greeting}>Welcome {user.firstName}</p>
      <label className={styles.field}>
        Card Number
        <input
          className={`${styles.input} ${styles.inputWide} ${showError("cardNumber") ? styles.inputError : ""}`}
          type="text"
          name="cardNumber"
          value={values.cardNumber}
          onChange={handleChange("cardNumber")}
          aria-invalid={showError("cardNumber")}
          aria-describedby="cardNumber-error"
        />
        {showError("cardNumber") && (
          <span id="cardNumber-error" className={styles.errorText} role="alert">
            {errors.cardNumber}
          </span>
        )}
      </label>
      <div className={styles.inlineRow}>
        <label className={styles.field}>
          PIN
          <input
            className={`${styles.input} ${styles.inputNarrow} ${showError("pin") ? styles.inputError : ""}`}
            type="text"
            name="pin"
            value={values.pin}
            onChange={handleChange("pin")}
            aria-invalid={showError("pin")}
            aria-describedby="pin-error"
          />
          {showError("pin") && (
            <span id="pin-error" className={styles.errorText} role="alert">
              {errors.pin}
            </span>
          )}
        </label>
        <label className={styles.field}>
          Expiry
          <input
            className={`${styles.input} ${styles.inputNarrow} ${showError("expiry") ? styles.inputError : ""}`}
            type="text"
            name="expiry"
            value={values.expiry}
            onChange={handleChange("expiry")}
            aria-invalid={showError("expiry")}
            aria-describedby="expiry-error"
          />
          {showError("expiry") && (
            <span id="expiry-error" className={styles.errorText} role="alert">
              {errors.expiry}
            </span>
          )}
        </label>
      </div>
      {submitted && hasErrors && (
        <p className={styles.formError} role="alert">
          Please review the highlighted inputs.
        </p>
      )}
      <button className={styles.submit} type="submit">
        Submit
      </button>
    </form>
  );
};
