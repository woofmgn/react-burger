import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, ReactNode, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
// import { useOrderInfo } from "../../hooks/useOrderIfo";
import { useAppSelector } from "../../hooks/useAppSelector";
import { IngredientIcon } from "../IngredientIcon/IngredientIcon";
import { OrderDate } from "../OrderDate/OrderDate";
import styles from "./styles.module.css";

type TOrderCardType = {
  name: string;
  number: number;
  _id: string;
  ingredientsList: string[];
  date: string;
  children?: ReactNode;
};

export const OrderCard: FC<TOrderCardType> = React.memo(
  ({ name, number, _id, ingredientsList, date, children }) => {
    const { data } = useAppSelector((state) => state.ingredientsReducer);
    // const { ingredients, totalPrice } = useOrderInfo(ingredientsList);

    const location = useLocation();

    const ingredients = useMemo(() => {
      if (data) {
        return data.filter((card) => ingredientsList.includes(card._id));
      }
    }, [data, ingredientsList]);

    const totalPrice = useMemo(() => {
      if (ingredients) {
        return ingredients.reduce((acc, item) => {
          if (item.type === "bun") {
            return (acc += item.price * 2);
          }
          return (acc += item.price);
        }, 0);
      }
    }, [ingredients]);

    const checkLocation = () => {
      if (location.pathname === "/profile/orders") {
        return `/profile/orders/${_id}`;
      } else {
        return `/feed/${_id}`;
      }
    };

    return (
      <Link
        key={_id}
        to={checkLocation()}
        state={{ background: location }}
        className={styles.link}
      >
        <li className={styles.container}>
          <div className={styles.wrapper}>
            <p className="text text_type_digits-default">{`#${number}`}</p>
            <OrderDate createdDate={date} />
          </div>
          <p className="text text_type_main-medium">{name}</p>
          {children}
          <div className={styles.wrapper}>
            <ul className={styles.list}>
              {ingredients &&
                ingredients.slice(0, 5).map((ingr) => {
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
              {totalPrice}
              <CurrencyIcon type="primary" />
            </span>
          </div>
        </li>
      </Link>
    );
  }
);
