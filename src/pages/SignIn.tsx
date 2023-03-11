import React from "react";
import styles from "../styles/SignIn.module.scss";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormValues } from "../types/FormValues";
import { useAppDispatch } from "../hooks/hooks";
import { signInClient } from "../redux/Actions/authAction";

interface IUser {
  mail: string;
  password: string;
}

const SignIn = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
  });
  const [user, setUser] = React.useState<IUser>({ mail: "", password: "" });

  const onSubmit = () => {
    dispatch(signInClient({ mail: user.mail, password: user.password }));
  };

  const handleUserChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  return (
    <div className={styles.wrapper}>
      <h1>Войти</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          register={register}
          name="mail"
          label="Электронная почта"
          value={user.mail}
          handleUserChange={handleUserChange}
        />
        <div className={styles.error}>
          {errors?.mail && <p>{errors?.mail.message}</p>}
        </div>
        <Input
          register={register}
          name="password"
          label="Пароль"
          value={user.password}
          handleUserChange={handleUserChange}
        />
        <div className={styles.error}>
          {errors?.password && <p>{errors?.password.message}</p>}
        </div>
        <input disabled={!isValid} type="submit" value="Войти" />
      </form>
      <span>
        Нет аккаунта? <Link to="/sign-up">Зарегистрироваться</Link>
      </span>
    </div>
  );
};

export default SignIn;
