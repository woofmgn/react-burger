import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

import {
  removeIngredients,
  replaceIngredient,
} from "../../services/actions/constructor";
import { ingredientItem } from "../../utils/prop-types";
import styles from "./styles.module.css";

export const Ingredient = ({ image, name, price, elem, keyId }) => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ingredientConstructor",
    item: { elem, keyId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "ingredientConstructor",
    hover(item) {
      if (item.keyId !== keyId) {
        dispatch(replaceIngredient({ item, keyId }));
      }
    },
  }));

  const handleRemove = () => {
    dispatch(removeIngredients(keyId));
  };

  const opacity = isDragging ? 0 : 1;

  return (
    <li
      ref={(node) => drag(drop(node))}
      className={styles.item}
      style={{ opacity: opacity }}
    >
      <div className="mr-2">
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={handleRemove}
      />
    </li>
  );
};

Ingredient.propTypes = ingredientItem.PropTypes;
