import { FC } from "react";
import styles from "./styles.module.css";

type TIngredientIconProps = {
  image?: string;
  name: string;
};

export const IngredientIcon: FC<TIngredientIconProps> = ({ image, name }) => {
  return (
    <li className={styles.item}>
      <img className={styles.image} src={image} alt={name} />
    </li>
  );
};
