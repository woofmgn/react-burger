import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import styles from "./styles.module.css";

export const IngredientCard: FC = () => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <div className={styles.iconWrapper}>
          <img className={styles.image} src={"!#"} alt={"!#"} />
        </div>
        <h3 className="text text_type_main-default ml-4">
          Флюоресцентная булка R2-D3
        </h3>
      </div>
      <div className={styles.wrapper}>
        <p className="text text_type_digits-default mr-2">
          {1} x {300}
        </p>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
};
