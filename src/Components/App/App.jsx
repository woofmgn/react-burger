import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { ProtectedRoute } from "../../HOC/ProtectedRoute/ProtectedRoute";
import { ForgotPassword } from "../../pages/ForgotPassword/ForgotPassword";
import { HistoryOrders } from "../../pages/HistoryOrders/HistoryOrders";
import { IngredientPage } from "../../pages/IngredientPage/IngredientPage";
import { Login } from "../../pages/Login/Login";
import { Main } from "../../pages/Main/Main";
import { Profile } from "../../pages/Profile/Profile";
import { Register } from "../../pages/Register/Register";
import { ResetPassword } from "../../pages/ResetPassword/ResetPassword";
import { resetDetails } from "../../services/actions/details";
import { getUser } from "../../services/actions/user";
import { getCookie } from "../../utils/cookies";
import { ingredientsArr } from "../../utils/prop-types";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { Modal } from "../Modal/Modal";
import styles from "./styles.module.css";

function App() {
  const { logged } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  let background = location.state && location.state.background;

  const handleModalClose = () => {
    dispatch(resetDetails());
    navigate(-1);
  };

  useEffect(() => {
    const jwtToken = getCookie("token");
    if (jwtToken) {
      dispatch(getUser());
    }
  }, [dispatch]);

  return (
    <div className={classNames(styles.app, {}, [])}>
      <Header />
      <main className={classNames(styles.main, {}, [])}>
        <Routes location={background || location}>
          <Route path="/" element={<Main />} />
          <Route
            path="/profile"
            element={<ProtectedRoute logged={logged} element={<Profile />} />}
          />
          <Route
            path="/profile/orders"
            element={
              <ProtectedRoute logged={logged} element={<HistoryOrders />} />
            }
          />
          <Route path="/register" element={<Register logged={logged} />} />
          <Route path="/login" element={<Login logged={logged} />} />
          <Route
            path="/forgot-password"
            element={<ForgotPassword logged={logged} />}
          />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/ingredients/:id"
            element={
              <IngredientPage>
                <IngredientDetails />
              </IngredientPage>
            }
          />
        </Routes>
      </main>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal onClose={handleModalClose} title={"Детали ингредиента"}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;

App.propTypes = ingredientsArr.PropTypes;
