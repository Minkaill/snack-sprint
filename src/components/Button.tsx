import React from "react";
import styles from "../styles/Button.module.scss";

interface IButton {
  children: React.ReactNode;
  setSelect: any;
}

const Button: React.FC<IButton> = ({ children, setSelect }) => {
  return (
    <button onClick={() => setSelect(children)} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
