import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import styles from "./styles.module.css";

export const Login = () => {
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
        <form className={classNames(styles.form, {}, ["mt-6"])}>
          <Input
            type="email"
            placeholder={"E-mail"}
            name={"email"}
            size={"default"}
            value={""}
          />
          <Input
            extraClass="mt-6"
            icon={"ShowIcon"}
            type="password"
            placeholder={"Пароль"}
            name={"password"}
            size={"default"}
            value={""}
          />
          <Button
            extraClass={classNames(styles.button, {}, ["mt-6"])}
            htmlType="submit"
            type="primary"
            size="medium"
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
