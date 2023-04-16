import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../api/Auth";
import { classNames } from "../../helpers/classNames";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { removeUser } from "../../services/actions/user";
import { ORDER_PAGE_TEXT, PROFILE_PAGE_TEXT } from "../../utils/constants";
import { setCookie } from "../../utils/cookies";
import styles from "./styles.module.css";

export const NavMenu = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const checkLocation = () => {
    if (pathname === "/profile") {
      return PROFILE_PAGE_TEXT;
    } else if (pathname === "/profile/orders") {
      return ORDER_PAGE_TEXT;
    }
  };

  const handleLogout = () => {
    auth.logoutUser().then((res) => {
      if (res.success) {
        setCookie("token", "");
        setCookie("refreshToken", "");
        dispatch(removeUser());
        navigate("/");
      }
    });
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navMenu}>
        <NavLink
          to="/profile"
          className={classNames(styles.navlink, {}, [
            "text text_type_main-medium text_color_inactive",
          ])}
          style={pathname === "/profile" ? { color: "#F5F6F7" } : {}}
        >
          <p>Профиль</p>
        </NavLink>
        <NavLink
          to="/profile/orders"
          className={classNames(styles.navlink, {}, [
            "text text_type_main-medium text_color_inactive",
          ])}
          style={pathname === "/profile/orders" ? { color: "#F5F6F7" } : {}}
        >
          <p>История заказов</p>
        </NavLink>
      </nav>
      <button
        onClick={handleLogout}
        className={classNames(styles.btn, {}, [
          "text text_type_main-medium text_color_inactive",
        ])}
        type="button"
      >
        <p>Выход</p>
      </button>
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
