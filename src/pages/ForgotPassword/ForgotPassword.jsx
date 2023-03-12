import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../api/Auth";
import { classNames } from "../../helpers/classNames";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import styles from "./styles.module.css";

export const ForgotPassword = () => {
  const { logged } = useSelector((state) => state.userReducer);
  const { values, handleChange, resetForm, errors, isValid } =
    useFormAndValidation();

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    auth
      .forgotPwd(values.email)
      .then((res) => {
        if (res.success) {
          resetForm();
          navigate("/reset-password", { state: "/forgot-password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
          Восстановление пароля
        </h1>
        <form
          onSubmit={handleSubmit}
          className={classNames(styles.form, {}, ["mt-6"])}
        >
          <Input
            extraClass="mt-6"
            type="email"
            placeholder={"Укажите e-mail"}
            name={"email"}
            size={"default"}
            error={Boolean(errors.email)}
            errorText={errors.email}
            onChange={handleChange}
            value={values.email || ""}
            required
          />
          <Button
            extraClass={classNames(styles.button, {}, ["mt-6"])}
            htmlType="submit"
            type="primary"
            size="medium"
            disabled={!isValid}
          >
            Восстановить
          </Button>
        </form>
        <div className={classNames(styles.wrapper, {}, ["mt-20"])}>
          <p className="text text_type_main-default text_color_inactive">
            Вспомнили пароль?
          </p>
          <Link className={styles.link} to="/login">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
};
