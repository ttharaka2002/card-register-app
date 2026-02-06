import React from "react";
import * as styles from "./IconButton.scss";

type IconButtonProps = {
  icon: string;
  ariaLabel: string;
  onClick?: () => void;
};

export const IconButton = ({ icon, ariaLabel, onClick }: IconButtonProps) => {
  return (
    <button type="button" className={styles.iconButton} aria-label={ariaLabel} onClick={onClick}>
      <span aria-hidden="true" className={styles.icon}>
        {icon}
      </span>
    </button>
  );
};
