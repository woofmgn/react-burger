import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { loginUser } from "../../services/actions/user";
import styles from "./styles.module.css";

export const Login = () => {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const { logged } = useSelector((state) => state.userReducer);
  const { state: locationState } = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(loginUser(values));
  };

  useEffect(() => {
    if (logged) {
      if (locationState) {
        const { redirectTo } = locationState;
        navigate(`${redirectTo.pathname}${redirectTo.search}`);
      }
    }
  }, [navigate, logged, locationState]);

  if (logged) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <h1
          className={classNames(styles.title, {}, [
            "text text_type_main-medium",
          ])}
        >
          Вход
        </h1>
        <form
          onSubmit={handleSubmit}
          className={classNames(styles.form, {}, ["mt-6"])}
        >
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
            Войти
          </Button>
        </form>
        <div className={classNames(styles.wrapper, {}, ["mt-20"])}>
          <p className="text text_type_main-default text_color_inactive">
            Вы - новый пользователь?
          </p>
          <Link className={styles.link} to="/register">
            Зарегистрироваться
          </Link>
        </div>
        <div className={classNames(styles.wrapper, {}, ["mt-4"])}>
          <p className="text text_type_main-default text_color_inactive">
            Забыли пароль?
          </p>
          <Link className={styles.link} to="/forgot-password">
            Восстановить пароль
          </Link>
        </div>
      </div>
    </div>
  );
};
