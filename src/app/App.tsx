import React from "react";
import * as styles from "./App.scss";

export const App = () => {
  return (
    <main className={styles.appShell}>
      <div className={styles.windowFrame}>
        <p className={styles.placeholderText}>App shell ready.</p>
      </div>
    </main>
  );
};
