import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import styles from "./styles.module.css";

type TIngredientCardProps = {
  name: string;
  image: string;
  price: number;
  type: string;
};

export const IngredientCard: FC<TIngredientCardProps> = ({
  name,
  image,
  price,
  type,
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <div className={styles.iconWrapper}>
          <img className={styles.image} src={image} alt={name} />
        </div>
        <h3 className="text text_type_main-default ml-4">{name}</h3>
      </div>
      <div className={styles.wrapper}>
        <p className="text text_type_digits-default mr-2">
          {type === "bun" ? 2 : 1} x {price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
};
