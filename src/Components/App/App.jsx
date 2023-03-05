import React from "react";
import { Route, Routes } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { ForgotPassword } from "../../pages/ForgotPassword/ForgotPassword";
import { Login } from "../../pages/Login/Login";
import { Main } from "../../pages/Main/Main";
import { Profile } from "../../pages/Profile/Profile";
import { Register } from "../../pages/Register/Register";
import { ResetPassword } from "../../pages/ResetPassword/ResetPassword";
import { ingredientsArr } from "../../utils/prop-types";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={classNames(styles.app, {}, [])}>
      <Header />
      <main className={classNames(styles.main, {}, [])}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

App.propTypes = ingredientsArr.PropTypes;
