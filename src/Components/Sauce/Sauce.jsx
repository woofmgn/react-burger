import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { classNames } from "../../helpers/classNames";
import { ingredientItem } from "../../utils/prop-types";
import styles from "./styles.module.css";

export const Sauce = React.memo(
  ({
    name,
    price,
    image,
    imageLarge,
    calories,
    proteins,
    fat,
    carbohydrates,
    onOpen,
  }) => {
    const handlerOpenModal = () => {
      onOpen({
        name: name,
        imageLarge: imageLarge,
        calories: calories,
        proteins: proteins,
        fat: fat,
        carbohydrates: carbohydrates,
      });
    };

    return (
      <li
        onClick={handlerOpenModal}
        className={classNames(styles.item, {}, [])}
      >
        <Counter count={0} size="default" extraClass="m-1" />
        <img className="ml-4 mr-4" src={image} alt="ингредиент" />
        <span
          className={classNames(styles.price, {}, [
            "mt-1 text text_type_digits-default",
          ])}
        >
          {price}
          <CurrencyIcon type="primary" />
        </span>
        <h3
          style={{ textAlign: "center" }}
          className={classNames(styles.title, {}, [
            "mt-1 text text_type_main-default",
          ])}
        >
          {name}
        </h3>
      </li>
    );
  }
);

Sauce.propTypes = ingredientItem.PropTypes;
