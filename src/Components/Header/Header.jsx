import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { classNames } from "../../helpers/classNames";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={classNames(styles.container, {}, ["pt-4 pb-4"])}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <a
            href={"/constructor"}
            className={classNames(styles.link, {}, ["pt-4 pr-5 pb-4 "])}
          >
            <BurgerIcon type="secondary" />
            <p className="pl-2 text text_type_main-default text_color_inactive">
              Конструктор
            </p>
          </a>
          <a
            href={"/orders"}
            className={classNames(styles.link, {}, ["pt-4 pr-5 pb-4 pl-5"])}
          >
            <ListIcon type="secondary" />
            <p className="pl-2 text text_type_main-default text_color_inactive">
              Лента заказов
            </p>
          </a>
        </nav>
        <Logo />
      </div>
      <a
        href={"/acoount"}
        className={classNames(styles.link, {}, ["pt-4 pb-4 pl-5"])}
      >
        <ProfileIcon type="secondary" />
        <p className="pl-2 text text_type_main-default text_color_inactive">
          Личный кабинет
        </p>
      </a>
    </header>
  );
};
