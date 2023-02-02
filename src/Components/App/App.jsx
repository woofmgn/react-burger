import styles from "./styles.module.css";

import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
      <Footer />
    </div>
  );
}

export default App;
