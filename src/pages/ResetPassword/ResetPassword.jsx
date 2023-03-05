import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import styles from "./styles.module.css";

export const ResetPassword = () => {
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
          <PasswordInput
            icon={"ShowIcon"}
            type="password"
            placeholder={"Введите новый пароль"}
            name={"password"}
            size={"default"}
            error={Boolean(errors.password)}
            errorText={errors.password}
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          <Input
            extraClass="mt-6"
            type="text"
            placeholder={"Введите код из письма"}
            name={"code"}
            size={"default"}
            onChange={handleChange}
            value={values.code || ""}
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
