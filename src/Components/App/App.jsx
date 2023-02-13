import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { classNames } from "../../helpers/classNames";
// import { getIndredients } from "../../services/actions/getIngredients";
import { ingredientsArr } from "../../utils/prop-types";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={classNames(styles.app, {}, [])}>
      <Header />
      <main className={classNames(styles.main, {}, [])}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
      <Footer />
    </div>
  );
}

export default App;

App.propTypes = ingredientsArr.PropTypes;
