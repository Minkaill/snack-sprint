import React from "react";
import styles from "../styles/Button.module.scss";

interface IButton {
  children: React.ReactNode;
  setSelect: (value: string) => void;
  select: string;
}

const Button: React.FC<IButton> = ({ children, setSelect, select }) => {
  return (
    <button
      onClick={() => setSelect(String(children))}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
