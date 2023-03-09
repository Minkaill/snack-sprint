import React from "react";
import styles from "../styles/Input.module.scss";

interface IInput {
  name: string;
  label: string;
  value: string;
  handleUserChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<IInput> = ({ value, handleUserChange, label, name }) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input
        name={name}
        onChange={handleUserChange}
        type="text"
        value={value}
      />
    </div>
  );
};

export default Input;
