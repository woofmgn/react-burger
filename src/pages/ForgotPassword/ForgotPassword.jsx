import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import styles from "./styles.module.css";

export const ForgotPassword = () => {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <h1
          className={classNames(styles.title, {}, [
            "text text_type_main-medium",
          ])}
        >
          Восстановление пароля
        </h1>
        <form className={classNames(styles.form, {}, ["mt-6"])}>
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
            Войти
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
    </div>
  );
};
