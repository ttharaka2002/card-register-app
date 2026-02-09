import React, { useMemo, useState } from "react";
import { User } from "../../types/user";
import {
  FieldName,
  FormErrors,
  FormState,
  fieldNames,
  initialState,
} from "../../domain/cardRegistration/types";
import { validateForm } from "../../domain/cardRegistration/validation";
import * as styles from "./RegisterCardScreen.scss";

type RegisterCardScreenProps = {
  user: User;
  onSubmit: () => void;
};

const errorId = (field: FieldName) => `${field}-error`;

export const RegisterCardScreen = ({ user, onSubmit }: RegisterCardScreenProps) => {

  //useState for this simple form with local validation. Next level- when more fields or rules, move to useReducer or React Hook Form
  //Validation & UX next levels:
  // - Add validation rules (e.g. card number format, PIN length) ,Masking/formatting: card number grouping, expiry auto‑slash,
  // Show success message on successful submission, Field-level validation on blur ,etc.
  //Refactored RegisterCardScreen to use the domain layer.
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const handleChange = (field: FieldName) => (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const showError = (field: FieldName) => submitted && Boolean(errors[field]);

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
          name={fieldNames.cardNumber}
          inputMode="numeric"
          autoComplete="cc-number"
          maxLength={19}
          value={values[fieldNames.cardNumber]}
          onChange={handleChange(fieldNames.cardNumber)}
          aria-invalid={showError(fieldNames.cardNumber)}
          aria-describedby={errorId(fieldNames.cardNumber)}
        />
        {showError(fieldNames.cardNumber) && (
          <span id={errorId(fieldNames.cardNumber)} className={styles.errorText} role="alert">
            {errors[fieldNames.cardNumber]}
          </span>
        )}
      </label>
      <div className={styles.inlineRow}>
        <label className={styles.field}>
          PIN
          <input
            className={`${styles.input} ${styles.inputNarrow} ${showError("pin") ? styles.inputError : ""}`}
            type="text"
            name={fieldNames.pin}
            inputMode="numeric"
            autoComplete="cc-csc"
            maxLength={4}
            value={values[fieldNames.pin]}
            onChange={handleChange(fieldNames.pin)}
            aria-invalid={showError(fieldNames.pin)}
            aria-describedby={errorId(fieldNames.pin)}
          />
          {showError(fieldNames.pin) && (
            <span id={errorId(fieldNames.pin)} className={styles.errorText} role="alert">
              {errors[fieldNames.pin]}
            </span>
          )}
        </label>
        <label className={styles.field}>
          Expiry
          <input
            className={`${styles.input} ${styles.inputNarrow} ${showError("expiry") ? styles.inputError : ""}`}
            type="text"
            name={fieldNames.expiry}
            inputMode="numeric"
            autoComplete="cc-exp"
            maxLength={5}
            value={values[fieldNames.expiry]}
            onChange={handleChange(fieldNames.expiry)}
            aria-invalid={showError(fieldNames.expiry)}
            aria-describedby={errorId(fieldNames.expiry)}
          />
          {showError(fieldNames.expiry) && (
            <span id={errorId(fieldNames.expiry)} className={styles.errorText} role="alert">
              {errors[fieldNames.expiry]}
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
