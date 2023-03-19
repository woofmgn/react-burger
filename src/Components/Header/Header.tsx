import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import styles from "./styles.module.css";

export const Header = () => {
  const { pathname } = useLocation();
  const location = useLocation();

  return (
    <header className={classNames(styles.container, {}, ["pt-4 pb-4"])}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <Link
            to={"/"}
            className={classNames(styles.link, {}, ["pt-4 pr-5 pb-4"])}
          >
            <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
            <p
              className={`pl-2 text text_type_main-default ${
                pathname === "/" ? "" : "text_color_inactive"
              }`}
            >
              Конструктор
            </p>
          </Link>
          <Link
            to={"/profile/orders"}
            className={classNames(styles.link, {}, ["pt-4 pr-5 pb-4 pl-5"])}
          >
            <ListIcon
              type={pathname === "/profile/orders" ? "primary" : "secondary"}
              // ex
            />
            <p
              className={`pl-2 text text_type_main-default ${
                pathname === "/profile/orders" ? "" : "text_color_inactive"
              }`}
            >
              Лента заказов
            </p>
          </Link>
        </nav>
        <Logo />
      </div>
      <Link
        state={{ redirectTo: location }}
        to={"/profile"}
        className={classNames(styles.link, {}, ["pt-4 pb-4 pl-5"])}
      >
        <ProfileIcon type={pathname === "/profile" ? "primary" : "secondary"} />
        <p
          className={`pl-2 text text_type_main-default ${
            pathname === "/profile" ? "" : "text_color_inactive"
          }`}
        >
          Личный кабинет
        </p>
      </Link>
    </header>
  );
};
