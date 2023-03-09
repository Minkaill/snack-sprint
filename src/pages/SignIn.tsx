import React from "react";
import styles from "../styles/SignIn.module.scss";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

interface IUser {
  email: string;
  password: string;
}

const SignIn = () => {
  const [user, setUser] = React.useState<IUser>({ email: "", password: "" });

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

      <form>
        <Input
          name="email"
          label="email"
          value={user.email}
          handleUserChange={handleUserChange}
        />
        <Input
          name="password"
          label="password"
          value={user.password}
          handleUserChange={handleUserChange}
        />
      </form>
      <button className={styles.btn}>Войти</button>
      <span>
        Нет аккаунта? <Link to="/sign-up">Зарегистрироваться</Link>
      </span>
    </div>
  );
};

export default SignIn;
