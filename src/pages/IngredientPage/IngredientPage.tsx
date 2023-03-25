import { FC, ReactNode } from "react";
import styles from "./styles.module.css";

type TIngredientPageProps = {
  children: ReactNode;
};

export const IngredientPage: FC<TIngredientPageProps> = ({ children }) => {
  return (
    <section className={styles.container}>
      <h1 className="text text_type_main-large">{"Детали ингредиента"}</h1>
      {children}
    </section>
  );
};
