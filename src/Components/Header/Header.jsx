import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={classNames(styles.container, {}, ["pt-4 pb-4"])}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <Link
            to={"/"}
            className={classNames(styles.link, {}, ["pt-4 pr-5 pb-4 "])}
          >
            <BurgerIcon type="secondary" />
            <p className="pl-2 text text_type_main-default text_color_inactive">
              Конструктор
            </p>
          </Link>
          <Link
            to={"/orders"}
            className={classNames(styles.link, {}, ["pt-4 pr-5 pb-4 pl-5"])}
          >
            <ListIcon type="secondary" />
            <p className="pl-2 text text_type_main-default text_color_inactive">
              Лента заказов
            </p>
          </Link>
        </nav>
        <Logo />
      </div>
      <Link
        to={"/profile"}
        className={classNames(styles.link, {}, ["pt-4 pb-4 pl-5"])}
      >
        <ProfileIcon type="secondary" />
        <p className="pl-2 text text_type_main-default text_color_inactive">
          Личный кабинет
        </p>
      </Link>
    </header>
  );
};
