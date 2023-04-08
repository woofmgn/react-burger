import { FC } from "react";
import styles from "./styles.module.css";

export const IngredientIcon: FC = () => {
  return (
    <li className={styles.item}>
      <img className={styles.image} src={"!#"} alt={"!#"} />
    </li>
  );
};
