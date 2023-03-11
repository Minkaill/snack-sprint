import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Form.module.scss";
import Input from "./Input";
import { IUser } from "../types/IUser";
import { FormValues } from "../types/FormValues";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { signUpCafe, signUpClient } from "../redux/Actions/authAction";

interface IForm {
  select: string;
}

const Form: React.FC<IForm> = ({ select }) => {
  const { data } = useAppSelector((state) => state.user);
  console.log(data);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const [user, setUser] = React.useState<IUser>({
    name: "",
    phone: "",
    city: "",
    address: "",
    mail: "",
    password: "",
  });

  const onSubmit = () => {
    const field = {
      name: user.name,
      phone: user.phone,
      city: user.city,
      address: user.address,
      mail: user.mail,
      password: user.password,
    };
    select === "Стать клиентом"
      ? dispatch(signUpClient(field))
      : dispatch(signUpCafe(field));
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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        register={register}
        name="name"
        label="Имя"
        value={user.name}
        handleUserChange={handleUserChange}
      />
      <div className={styles.error}>
        {errors?.name && <p>{errors?.name.message}</p>}
      </div>
      <Input
        register={register}
        name="phone"
        label="Номер телефона"
        value={user.phone}
        handleUserChange={handleUserChange}
      />
      <div className={styles.error}>
        {errors?.phone && <p>{errors?.phone.message}</p>}
      </div>
      <Input
        register={register}
        name="city"
        label="Город"
        value={user.city}
        handleUserChange={handleUserChange}
      />
      <div className={styles.error}>
        {errors?.city && <p>{errors?.city.message}</p>}
      </div>
      <Input
        register={register}
        name="address"
        label="Адресс"
        value={user.address}
        handleUserChange={handleUserChange}
      />
      <div className={styles.error}>
        {errors?.address && <p>{errors?.address.message}</p>}
      </div>
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
      <input
        disabled={!isValid}
        type="submit"
        value="Регистрация"
        name="send"
      />
    </form>
  );
};

export default Form;
