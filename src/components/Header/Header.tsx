import React from "react";
import * as styles from "./Header.scss";
import { IconButton } from "../Button/IconButton";

type HeaderAction = {
  icon: string;
  ariaLabel: string;
  onClick?: () => void;
};

type HeaderProps = {
  title: string;
  leftAction?: HeaderAction;
};

export const Header = ({ title, leftAction }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSlot}>
        {leftAction ? (
          <IconButton icon={leftAction.icon} ariaLabel={leftAction.ariaLabel} onClick={leftAction.onClick} />
        ) : (
          <span className={styles.leftSpacer} aria-hidden="true" />
        )}
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.rightSlot} aria-hidden="true" />
    </header>
  );
};
