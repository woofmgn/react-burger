import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, ReactNode, useMemo } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { useAppSelector } from "../../hooks/useAppSelector";
import { IngredientIcon } from "../IngredientIcon/IngredientIcon";
import styles from "./styles.module.css";

type TOrderCardType = {
  name: string;
  number: number;
  _id: string;
  ingredients: string[];
  date: string;
  children?: ReactNode;
};

export const OrderCard: FC<TOrderCardType> = React.memo(
  ({ name, number, _id, ingredients, date, children }) => {
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

    const orderDate = () => {
      const today = new Date();
      const orderDate = new Date(date);
      const dayBefore = today.getDate() - orderDate.getDate();

      return (
        <FormattedDate
          date={
            new Date(
              orderDate.getFullYear(),
              orderDate.getMonth(),
              orderDate.getDate() - dayBefore,
              orderDate.getHours(),
              orderDate.getMinutes() - 1,
              0
            )
          }
        />
      );
    };

    return (
      <Link key={_id} to={`/feed/${_id}`} className={styles.link}>
        <li className={styles.container}>
          <div className={styles.wrapper}>
            <p className="text text_type_digits-default">{`#${number}`}</p>
            {orderDate()}
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
