import React from "react";
import { classNames } from "../../helpers/classNames";
import { ingredientsArr } from "../../utils/prop-types";
import { Main } from '../../pages/Main/Main';
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={classNames(styles.app, {}, [])}>
      <Header />
      <main className={classNames(styles.main, {}, [])}>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;

App.propTypes = ingredientsArr.PropTypes;
