import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavMenu } from "../../Components/NavMenu/NavMenu";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { getUser } from "../../services/actions/user";
import styles from "./styles.module.css";

export const Profile = () => {
  const { values, handleChange, setValues, errors, isValid } =
    useFormAndValidation();

  const { user, success } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    if (success) {
      setValues({ name: user.name, email: user.email, password: "******" });
    }
  }, [success, dispatch]);

  return (
    <section className={styles.section}>
      <NavMenu />
      {user && (
        <form className="ml-15">
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
        </form>
      )}
    </section>
  );
};
