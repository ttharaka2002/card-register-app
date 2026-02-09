export const fieldNames = {
  cardNumber: "cardNumber",
  pin: "pin",
  expiry: "expiry",
} as const;

export type FieldName = keyof typeof fieldNames;

export type FormState = Record<FieldName, string>;

export type FormErrors = Partial<Record<keyof FormState, string>>;

export const initialState: FormState = {
  [fieldNames.cardNumber]: "",
  [fieldNames.pin]: "",
  [fieldNames.expiry]: "",
};
