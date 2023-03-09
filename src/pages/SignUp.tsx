import React from "react";
import styles from "../styles/SignUp.module.scss";
import Form from "../components/Form";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [select, setSelect] = React.useState<string>("Стать клиентом");

  return (
    <div className={styles.wrapper}>
      <div className={styles.select}>
        <Button setSelect={setSelect}>Стать клиентом</Button>
        <Button setSelect={setSelect}>Для ресторана</Button>
      </div>
      <span>
        Уже есть аккаунт? <Link to="/sign-in">Войти</Link>
      </span>

      <h1>ЗАРЕГИСТРИРОВАТЬСЯ</h1>

      <Form select={select} />

      <button className={styles.btn}>Регистрация</button>
    </div>
  );
};

export default SignUp;
