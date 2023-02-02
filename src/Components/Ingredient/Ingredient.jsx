import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientItem } from "../../utils/prop-types";

import styles from "./styles.module.css";

export const Ingredient = ({ img, name, price }) => {
  return (
    <li className={styles.item}>
      <div className="mr-2">
        <DragIcon type="primary" />
      </div>
      <ConstructorElement text={name} price={price} thumbnail={img} />
    </li>
  );
};

Ingredient.propTypes = ingredientItem.PropTypes;
