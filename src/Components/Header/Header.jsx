import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header
      style={{ display: "flex", justifyContent: "space-between" }}
      className={"pt-4 pb-4"}
    >
      <div className={styles.wrapper}>
        <nav style={{ display: "flex", gap: "8px" }}>
          <a
            href={"/constructor"}
            className={"pt-4 pr-5 pb-4 "}
            style={{ textDecoration: "none", display: "flex" }}
          >
            <BurgerIcon type="secondary" />
            <p className="pl-2 text text_type_main-default text_color_inactive">
              Конструктор
            </p>
          </a>
          <a
            href={"/constructor"}
            className={"pt-4 pr-5 pb-4 pl-5"}
            style={{ textDecoration: "none", display: "flex" }}
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
        href={"/constructor"}
        className={"pt-4 pb-4 pl-5"}
        style={{ textDecoration: "none", display: "flex" }}
      >
        <ProfileIcon type="secondary" />
        <p className="pl-2 text text_type_main-default text_color_inactive">
          Личный кабинет
        </p>
      </a>
    </header>
  );
};
