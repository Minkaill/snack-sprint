import React from "react";
import styles from "../styles/SignIn.module.scss";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormValues } from "../types/FormValues";

interface IUser {
  mail: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
  });
  const onSubmit = () => console.log();
  const [user, setUser] = React.useState<IUser>({ mail: "", password: "" });

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

      <form className={styles.form}>
        <Input
          register={register}
          name="email"
          label="email"
          value={user.mail}
          handleUserChange={handleUserChange}
        />
        <div className={styles.error}>
          {errors?.mail && <p>{errors?.mail.message}</p>}
        </div>
        <Input
          register={register}
          name="password"
          label="password"
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
