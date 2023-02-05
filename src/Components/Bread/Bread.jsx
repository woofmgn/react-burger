import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { ingredientItem } from "../../utils/prop-types";

export const Bread = ({
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
    <>
      <li
        onClick={handlerOpenModal}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <Counter count={1} size="default" extraClass="m-1" />
        <img className="ml-4 mr-4" src={image} alt="ингредиент" />
        <span
          className="mt-1 text text_type_digits-default"
          style={{ display: "flex", gap: "8px" }}
        >
          {price}
          <CurrencyIcon type="primary" />
        </span>
        <h3
          style={{ textAlign: "center" }}
          className="mt-1 text text_type_main-default"
        >
          {name}
        </h3>
      </li>
    </>
  );
};

Bread.propTypes = ingredientItem.PropTypes;
