import { useDispatch } from 'react-redux';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { auth } from '../../api/Auth';
import { classNames } from "../../helpers/classNames";
import { removeUser } from '../../services/actions/auth';
import { setCookie } from '../../utils/cookies';
import styles from "./styles.module.css";

export const NavMenu = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkLocation = () => {
    if (pathname === "/profile") {
      return "В этом разделе вы можете изменить свои персональные данные";
    } else if (pathname === "/profile/orders") {
      return "В этом разделе содержится информация о ваших заказах";
    }
  };

  const handleLogout = () => {
    auth.logoutUser()
      .then(res => {
        if(res.success) {
          setCookie('token', '');
          setCookie('refreshToken', '');
          dispatch(removeUser());
          navigate('/')
        }
      })
  }

  const activeLink = ({ isActive }) => ({ color: isActive ? "#F5F6F7" : "" });

  return (
    <div className={styles.container}>
      {/* <div className={styles.wrapper}></div> */}
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
        {/* <NavLink
          to="/logout"
          className={classNames(styles.navlink, {}, [
            "text text_type_main-medium text_color_inactive",
          ])}
          style={activeLink}
        >
          <p>Выход</p>
        </NavLink> */}
      </nav>
      <button onClick={handleLogout} className={classNames(styles.btn, {}, ["text text_type_main-medium text_color_inactive"])} type='button'><p>Выход</p></button>
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
