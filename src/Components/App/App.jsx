import React from "react";
import { api } from "../../api/Api";
import { ingredientsArr } from "../../utils/prop-types";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./styles.module.css";

function App() {
  const [dataList, setDataList] = React.useState([]);

  React.useEffect(() => {
    const getDataList = async () => {
      try {
        const res = await api.getData();
        setDataList(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getDataList();
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <BurgerIngredients dataList={dataList} />
        <BurgerConstructor dataList={dataList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

App.propTypes = ingredientsArr.PropTypes;
