import React from "react";
import { Route, Routes } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { Login } from "../../pages/Login/Login";
import { Main } from "../../pages/Main/Main";
import { Register } from "../../pages/Register/Register";
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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

App.propTypes = ingredientsArr.PropTypes;
