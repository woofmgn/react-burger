import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useMemo } from "react";
import styles from "./styles.module.css";

type TIngredientCardProps = {
  name: string;
  image: string;
  price: number;
  ingredient: string[];
  id: string;
};

export const IngredientCard: FC<TIngredientCardProps> = ({
  name,
  image,
  price,
  ingredient,
  id,
}) => {
  const ingredientCount = useMemo(() => {
    const ingrRepeatCount = ingredient.filter((ingrItem) => ingrItem === id);
    return ingrRepeatCount.length;
  }, [id, ingredient]);

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
          {ingredientCount} x {price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
};
