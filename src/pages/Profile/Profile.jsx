import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavMenu } from "../../Components/NavMenu/NavMenu";
import { classNames } from "../../helpers/classNames";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { setUser } from "../../services/actions/user";
import styles from "./styles.module.css";

export const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { values, handleChange, setValues, errors } = useFormAndValidation();

  const { user, logged } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const handleCheckNewValue = () => {
    if (values.name !== user.name || values.email !== user.email) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleSumbit = (evt) => {
    evt.preventDefault();
    dispatch(setUser(values));
  };

  useEffect(() => {
    if (user) {
      handleCheckNewValue();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  useEffect(() => {
    if (logged) {
      setValues({ name: user.name, email: user.email, password: "******" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logged]);

  return (
    <section className={styles.section}>
      <NavMenu />
      {user && (
        <form
          onSubmit={handleSumbit}
          className={classNames(styles.form, {}, ["ml-15"])}
        >
          <Input
            type="text"
            placeholder={"Имя"}
            name={"name"}
            size={"default"}
            icon="EditIcon"
            error={Boolean(errors.name)}
            errorText={errors.name}
            onChange={handleChange}
            value={values.name || ""}
            required
          />
          <Input
            extraClass="mt-6"
            type="email"
            placeholder={"Логин"}
            name={"email"}
            size={"default"}
            icon="EditIcon"
            error={Boolean(errors.email)}
            errorText={errors.email}
            onChange={handleChange}
            value={values.email || ""}
            required
          />
          <PasswordInput
            extraClass="mt-6"
            name={"password"}
            icon="EditIcon"
            error={Boolean(errors.password)}
            errorText={errors.password}
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          {isVisible && (
            <Button
              htmlType="submit"
              type="primary"
              size="medium"
              extraClass="mt-6"
            >
              Сохранить
            </Button>
          )}
        </form>
      )}
    </section>
  );
};
