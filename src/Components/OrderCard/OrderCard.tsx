import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { useOrderInfo } from "../../hooks/useOrderIfo";
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
    const { ingredients, totalPrice } = useOrderInfo(ingredientsList);

    const location = useLocation();

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
        state={{
          background: location,
          redirectTo: {
            ...location,
            pathname: `${location.pathname}/${_id}`,
          },
        }}
        // onClick={handleClick}
        // state={{
        //   background: { ...location, pathname: `${location.pathname}/${_id}` },
        // }}
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
                ingredients.slice(0, 6).map((ingr) => {
                  return (
                    <IngredientIcon
                      key={ingr._id}
                      image={ingr.image_mobile}
                      name={ingr.name}
                    />
                  );
                })}
              {ingredients && ingredients.length > 6 && (
                <p className={styles.count}>+{ingredients.length - 6}</p>
              )}
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
