import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from "prop-types";
import styles from "./styles.module.css";

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

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
