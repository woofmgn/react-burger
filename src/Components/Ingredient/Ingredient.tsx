import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import {
  removeIngredients,
  replaceIngredient,
} from "../../services/actions/constructor";
import styles from "./styles.module.css";

type TIngredientProps = {
  element: {
    image: string;
    name: string;
    price: number;
    keyId: string;
  };
};

export const Ingredient: FC<TIngredientProps> = ({ element }) => {
  const { image, name, price, keyId } = element;

  const dispatch = useAppDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ingredientConstructor",
    item: { element, keyId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "ingredientConstructor",
    hover(item: any) {
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
