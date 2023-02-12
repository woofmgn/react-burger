import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "../../helpers/classNames";
import { getIndredients } from "../../services/actions/getIngredients";
import { ingredientsArr } from "../../utils/prop-types";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./styles.module.css";

function App() {
  const { data, feedRequest } = useSelector(
    (state) => state.ingredientsReducer
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIndredients());
  }, [dispatch]);

  return (
    <div className={classNames(styles.app, {}, [])}>
      <Header />
      <main className={classNames(styles.main, {}, [])}>
        {feedRequest ? (
          <div>Loading...</div>
        ) : (
          <>
            <BurgerIngredients dataList={data} />
            <BurgerConstructor dataList={data} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;

App.propTypes = ingredientsArr.PropTypes;
