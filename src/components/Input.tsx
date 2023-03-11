import React from "react";
import styles from "../styles/Input.module.scss";
import { UseFormRegister } from "react-hook-form";
import { IUser } from "../types/IUser";
import { FormValues } from "../types/FormValues";

interface IInput {
  name: any;
  label: string;
  value: string;
  handleUserChange: React.ChangeEventHandler<HTMLInputElement>;
  register: UseFormRegister<FormValues>;
}

const Input: React.FC<IInput> = ({
  value,
  handleUserChange,
  label,
  name,
  register,
}) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input
        {...register(name, {
          required: "Поле обязательно к заполнению.",
          minLength: {
            value: 5,
            message: "Минимум 5 символов.",
          },
        })}
        id={name}
        name={name}
        onChange={handleUserChange}
        type="text"
        value={value}
      />
    </div>
  );
};

export default Input;
