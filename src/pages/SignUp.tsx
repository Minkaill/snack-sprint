import React from "react";
import styles from "../styles/SignUp.module.scss";
import Form from "../components/Form";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks";

const SignUp = () => {
  const [select, setSelect] = React.useState<string>("Стать клиентом");

  return (
    <div className={styles.wrapper}>
      <div className={styles.select}>
        <Button select={select} setSelect={setSelect}>
          Стать клиентом
        </Button>
        <Button select={select} setSelect={setSelect}>
          Для ресторана
        </Button>
      </div>
      <span>
        Уже есть аккаунт? <Link to="/sign-in">Войти</Link>
      </span>

      <h1>ЗАРЕГИСТРИРОВАТЬСЯ</h1>

      <Form select={select} />
    </div>
  );
};

export default SignUp;
