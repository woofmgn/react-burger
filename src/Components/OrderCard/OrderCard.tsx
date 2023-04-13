import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, ReactNode, useMemo } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { useAppSelector } from "../../hooks/useAppSelector";
import { IngredientIcon } from "../IngredientIcon/IngredientIcon";
import styles from "./styles.module.css";

type TOrderCardType = {
  name?: string;
  number?: number;
  _id?: string;
  ingredients?: string[];
  children?: ReactNode;
};

export const OrderCard: FC<TOrderCardType> = React.memo(
  ({ name, number, _id, ingredients, children }) => {
    const { data } = useAppSelector((state) => state.ingredientsReducer);

    const ingredient = useMemo(() => {
      if (data && ingredients) {
        return data.filter((card) => ingredients.includes(card._id));
      }
    }, [data, ingredients]);

    const price = useMemo(() => {
      if (ingredient) {
        return ingredient.reduce((acc, item) => {
          if (item.type === "bun") {
            return (acc += item.price * 2);
          }
          return (acc += item.price);
        }, 0);
      }
    }, [ingredient]);

    return (
      <Link key={_id} to={`/feed/${_id}`} className={styles.link}>
        <li className={styles.container}>
          <div className={styles.wrapper}>
            <p className="text text_type_digits-default">{`#${number}`}</p>
            <p className="text text_type_main-default text_color_inactive">
              Сегодня, 14.24
            </p>
          </div>
          <p className="text text_type_main-medium">{name}</p>
          {children}
          <div className={styles.wrapper}>
            <ul className={styles.list}>
              {ingredient &&
                ingredient.slice(0, 5).map((ingr) => {
                  return (
                    <IngredientIcon
                      key={ingr._id}
                      image={ingr.image_mobile}
                      name={ingr.name}
                    />
                  );
                })}
            </ul>
            <span
              className={classNames(styles.price, {}, [
                "text text_type_digits-default",
              ])}
            >
              {price}
              <CurrencyIcon type="primary" />
            </span>
          </div>
        </li>
      </Link>
    );
  }
);
