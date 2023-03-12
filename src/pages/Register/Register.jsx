import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { addUser } from "../../services/actions/user";
import styles from "./styles.module.css";

export const Register = () => {
  const { logged } = useSelector((state) => state.userReducer);

  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addUser(values));
  };

  if (logged) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <h1
          className={classNames(styles.title, {}, [
            "text text_type_main-medium",
          ])}
        >
          Регистрация
        </h1>
        <form
          onSubmit={handleSubmit}
          className={classNames(styles.form, {}, ["mt-6"])}
        >
          <Input
            type="text"
            placeholder={"Имя"}
            name={"name"}
            size={"default"}
            error={Boolean(errors.name)}
            errorText={errors.name}
            onChange={handleChange}
            value={values.name || ""}
            required
          />
          <Input
            extraClass="mt-6"
            type="email"
            placeholder={"E-mail"}
            name={"email"}
            size={"default"}
            error={Boolean(errors.email)}
            errorText={errors.email}
            onChange={handleChange}
            value={values.email || ""}
            required
          />
          <PasswordInput
            extraClass="mt-6"
            icon={"ShowIcon"}
            type="password"
            placeholder={"Пароль"}
            name={"password"}
            size={"default"}
            error={Boolean(errors.password)}
            errorText={errors.password}
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          <Button
            extraClass={classNames(styles.button, {}, ["mt-6"])}
            htmlType="submit"
            type="primary"
            size="medium"
            disabled={!isValid}
          >
            Зарегистрироваться
          </Button>
        </form>
        <div className={classNames(styles.wrapper, {}, ["mt-20"])}>
          <p className="text text_type_main-default text_color_inactive">
            Уже зарегистрированы?
          </p>
          <Link className={styles.link} to="/login">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
};
