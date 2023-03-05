// import { classNames } from "../../helpers/classNames";
import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavMenu } from "../../Components/NavMenu/NavMenu";
import styles from "./styles.module.css";

export const Profile = () => {
  return (
    <section className={styles.section}>
      <NavMenu />
      <form className="ml-15">
        <Input
          type="text"
          placeholder={"Имя"}
          name={"name"}
          size={"default"}
          value={""}
          icon="EditIcon"
        />
        <Input
          extraClass="mt-6"
          type="email"
          placeholder={"Логин"}
          name={"email"}
          size={"default"}
          value={""}
          icon="EditIcon"
        />
        <PasswordInput
          extraClass="mt-6"
          value={""}
          name={"password"}
          icon="EditIcon"
        />
      </form>
    </section>
  );
};
