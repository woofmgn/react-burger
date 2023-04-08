import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, FormEvent, SyntheticEvent, useEffect, useState } from "react";
import { NavMenu } from "../../Components/NavMenu/NavMenu";
import { TNewUserData } from "../../api/UserData";
import { classNames } from "../../helpers/classNames";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { setUser } from "../../services/actions/user";
import styles from "./styles.module.css";

export const Profile: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { values, errors, isValid, handleChange, setValues, setErrors } =
    useFormAndValidation();

  const { user, logged } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const handleCheckNewValue = () => {
    if (values.name !== user!.name || values.email !== user!.email) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleSumbit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(setUser(values as TNewUserData));
    setIsVisible((prev) => !prev);
  };

  const handleResetChange = (evt: SyntheticEvent) => {
    evt.preventDefault();
    setValues({
      name: user!.name,
      email: user!.email,
      password: "******",
    });
    setErrors({});
  };

  useEffect(() => {
    if (user) {
      handleCheckNewValue();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  useEffect(() => {
    if (logged) {
      setValues({ name: user!.name, email: user!.email, password: "******" });
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
            // @ts-ignore
            type={"password"}
            error={Boolean(errors.password)}
            errorText={errors.password}
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          {isVisible && (
            <div className={styles.btnWrapper}>
              <Button
                onClick={handleResetChange}
                htmlType="button"
                type="primary"
                size="medium"
                extraClass="mt-6"
              >
                Отменить
              </Button>
              <Button
                htmlType="submit"
                type="primary"
                size="medium"
                extraClass="mt-6"
                disabled={!isValid}
              >
                Сохранить
              </Button>
            </div>
          )}
        </form>
      )}
    </section>
  );
};
