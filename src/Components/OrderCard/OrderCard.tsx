import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { IngredientIcon } from "../IngredientIcon/IngredientIcon";
import styles from "./styles.module.css";

type TOrderCardType = {
  children?: ReactNode;
};

export const OrderCard: FC<TOrderCardType> = ({ children }) => {
  return (
    <Link to={"/feed/:id"} className={styles.link}>
      <li className={styles.container}>
        <div className={styles.wrapper}>
          <p className="text text_type_digits-default">#03465</p>
          <p className="text text_type_main-default text_color_inactive">
            Сегодня, 14.24
          </p>
        </div>
        <p className="text text_type_main-medium">Interstellar Burger.</p>
        {children}
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            <IngredientIcon />
            <IngredientIcon />
            <IngredientIcon />
            <IngredientIcon />
            <IngredientIcon />
          </ul>
          <span
            className={classNames(styles.price, {}, [
              "text text_type_digits-default",
            ])}
          >
            {1234}
            <CurrencyIcon type="primary" />
          </span>
        </div>
      </li>
    </Link>
  );
};
