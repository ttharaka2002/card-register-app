import React, { ReactNode } from "react";
import * as styles from "./WindowLayout.scss";

type WindowLayoutProps = {
  header: ReactNode;
  children: ReactNode;
};

export const WindowLayout = ({ header, children }: WindowLayoutProps) => {
  return (
    <section className={styles.window}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>{children}</div>
    </section>
  );
};
