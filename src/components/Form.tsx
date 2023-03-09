import React from "react";
import styles from "../styles/Form.module.scss";
import Input from "./Input";

interface IUser {
  name: string;
  phone: string;
  city: string;
  adress: string;
  email: string;
  password: string;
  restaurant: string;
}

interface IForm {
  select?: string;
}

const Form: React.FC<IForm> = ({ select }) => {
  const [user, setUser] = React.useState<IUser>({
    name: "",
    phone: "",
    city: "",
    adress: "",
    email: "",
    password: "",
    restaurant: "",
  });

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
    <form className={styles.form}>
      {select === "Стать клиентом" ? (
        <Input
          name="name"
          label="Имя"
          value={user.name}
          handleUserChange={handleUserChange}
        />
      ) : (
        <Input
          name="restaurant"
          label="Название ресторана"
          value={user.restaurant}
          handleUserChange={handleUserChange}
        />
      )}
      <Input
        name="phone"
        label="Номер телефона"
        value={user.phone}
        handleUserChange={handleUserChange}
      />
      <Input
        name="city"
        label="Город"
        value={user.city}
        handleUserChange={handleUserChange}
      />
      <Input
        name="adress"
        label="Адресс"
        value={user.adress}
        handleUserChange={handleUserChange}
      />
      <Input
        name="email"
        label="Электронная почта"
        value={user.email}
        handleUserChange={handleUserChange}
      />
      <Input
        name="password"
        label="Пароль"
        value={user.password}
        handleUserChange={handleUserChange}
      />
    </form>
  );
};

export default Form;
