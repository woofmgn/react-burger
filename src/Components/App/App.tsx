import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ProtectedRoute } from "../../HOC/ProtectedRoute/ProtectedRoute";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Feed } from "../../pages/Feed/Feed";
import { ForgotPassword } from "../../pages/ForgotPassword/ForgotPassword";
import { HistoryOrders } from "../../pages/HistoryOrders/HistoryOrders";
import { IngredientPage } from "../../pages/IngredientPage/IngredientPage";
import { Login } from "../../pages/Login/Login";
import { Main } from "../../pages/Main/Main";
import { OrderPage } from "../../pages/OrderPage/OrderPage";
import { Profile } from "../../pages/Profile/Profile";
import { Register } from "../../pages/Register/Register";
import { ResetPassword } from "../../pages/ResetPassword/ResetPassword";
import { resetDetails } from "../../services/actions/details";
import { getIndredients } from "../../services/actions/getIngredients";
import { checkAuthUser } from "../../services/actions/user";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { Modal } from "../Modal/Modal";
import { OrderInfo } from "../OrderInfo/OrderInfo";
import styles from "./styles.module.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  let background = location.state && location.state.background;

  const dispatch = useAppDispatch();

  const handleModalClose = () => {
    dispatch(resetDetails());
    navigate(-1);
  };

  useEffect(() => {
    dispatch(checkAuthUser());
    dispatch(getIndredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes location={background || location}>
          <Route path="/" element={<Main />} />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
          <Route
            path="/profile/orders"
            element={
              <ProtectedRoute
                background={background}
                element={<HistoryOrders />}
              />
            }
          />
          {/* <Route path="/profile/orders" element={<HistoryOrders />} /> */}
          <Route path="/feed" element={<Feed />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/ingredients/:id"
            element={
              <IngredientPage>
                <IngredientDetails />
              </IngredientPage>
            }
          />
          <Route
            path="/feed/:id"
            element={
              <OrderPage>
                <OrderInfo />
              </OrderPage>
            }
          />
          {/* <Route
            path="/profile/orders/:id"
            element={
              <OrderPage>
                <OrderInfo />
              </OrderPage>
            }
          /> */}
          <Route
            path="/profile/orders/:id"
            element={
              <ProtectedRoute
                element={
                  <OrderPage>
                    <OrderInfo />
                  </OrderPage>
                }
              />
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
          <Route
            path="/feed/:id"
            element={
              <Modal onClose={handleModalClose}>
                <OrderInfo />
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:id"
            element={
              <Modal onClose={handleModalClose}>
                <OrderInfo />
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
