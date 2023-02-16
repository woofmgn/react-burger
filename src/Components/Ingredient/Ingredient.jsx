import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { removeIngredients } from "../../services/actions/constructor";
import { ingredientItem } from "../../utils/prop-types";
import styles from "./styles.module.css";

export const Ingredient = ({ image, name, price, id, index }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeIngredients(index));
  };
  return (
    <li className={styles.item}>
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
