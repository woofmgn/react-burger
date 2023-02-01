import styles from "./styles.module.css";

import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { Header } from "../Header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main style={{ display: "flex", gap: "40px" }}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
