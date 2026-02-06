import React from "react";
import { User } from "../../types/user";
import * as styles from "./RegisterCardScreen.scss";

type RegisterCardScreenProps = {
  user: User;
  onSubmit: () => void;
};

export const RegisterCardScreen = ({ user, onSubmit }: RegisterCardScreenProps) => {
  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <p className={styles.greeting}>Welcome {user.firstName}</p>
      <label className={styles.field}>
        Card Number
        <input
          className={`${styles.input} ${styles.inputWide}`}
          type="text"
          name="cardNumber"
        />
      </label>
      <div className={styles.inlineRow}>
        <label className={styles.field}>
          PIN
          <input
            className={`${styles.input} ${styles.inputNarrow}`}
            type="text"
            name="pin"
          />
        </label>
        <label className={styles.field}>
          Expiry
          <input
            className={`${styles.input} ${styles.inputNarrow}`}
            type="text"
            name="expiry"
          />
        </label>
      </div>
      <button className={styles.submit} type="submit">
        Submit
      </button>
    </form>
  );
};
