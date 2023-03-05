import { NavLink, useLocation } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import styles from "./styles.module.css";

export const NavMenu = () => {
  const { pathname } = useLocation();

  const checkLocation = () => {
    if (pathname === "/profile") {
      return "В этом разделе вы можете изменить свои персональные данные";
    } else if (pathname === "/profile/orders") {
      return "В этом разделе содержится информация о ваших заказах";
    }
  };

  const activeLink = ({ isActive }) => ({ color: isActive ? "#F5F6F7" : "" });

  return (
    <div className={styles.container}>
      <nav className={styles.navMenu}>
        <NavLink
          to="/profile"
          className={classNames(styles.navlink, {}, [
            "text text_type_main-medium text_color_inactive",
          ])}
          style={activeLink}
        >
          <p>Профиль</p>
        </NavLink>
        <NavLink
          to="/profile/orders"
          className={classNames(styles.navlink, {}, [
            "text text_type_main-medium text_color_inactive",
          ])}
          style={activeLink}
        >
          <p>История заказов</p>
        </NavLink>
        <NavLink
          to="/logout"
          className={classNames(styles.navlink, {}, [
            "text text_type_main-medium text_color_inactive",
          ])}
          style={activeLink}
        >
          <p>Выход</p>
        </NavLink>
      </nav>
      <p
        className={classNames(styles.description, {}, [
          "text text_type_main-default text_color_inactive mt-20",
        ])}
      >
        {checkLocation()}
      </p>
    </div>
  );
};
