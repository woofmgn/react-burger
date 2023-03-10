import styles from "./styles.module.css";

export const IngredientPage = ({ children }) => {
  return (
    <section className={styles.container}>
      <h1 className="text text_type_main-large">{"Детали ингредиента"}</h1>
      {children}
    </section>
  );
};
