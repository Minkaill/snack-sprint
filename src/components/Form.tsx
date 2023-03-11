import React from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import styles from "../styles/Form.module.scss";
import Input from "./Input";
import { IUser } from "../types/IUser";
import { FormValues } from "../types/FormValues";

interface IForm {
  select: string;
}

const Form: React.FC<IForm> = ({ select }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
  });
  const onSubmit = () => console.log();

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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {select === "Стать клиентом" ? (
        <>
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
        </>
      ) : (
        <>
          <Input
            register={register}
            name="restaurant"
            label="Название ресторана"
            value={user.restaurant}
            handleUserChange={handleUserChange}
          />
          <div className={styles.error}>
            {errors?.restaurant && <p>{errors?.restaurant.message}</p>}
          </div>
        </>
      )}
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
        name="adress"
        label="Адресс"
        value={user.adress}
        handleUserChange={handleUserChange}
      />
      <div className={styles.error}>
        {errors?.adress && <p>{errors?.adress.message}</p>}
      </div>
      <Input
        register={register}
        name="email"
        label="Электронная почта"
        value={user.email}
        handleUserChange={handleUserChange}
      />
      <div className={styles.error}>
        {errors?.email && <p>{errors?.email.message}</p>}
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
