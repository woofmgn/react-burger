import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC } from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { TCard } from "../../utils/@types";
import styles from "./styles.module.css";

type TCardData = {
  name: string;
  imageLarge: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
};

interface TCardProps {
  props: TCard;
  onOpen: (data: TCardData) => void;
}

export const Card: FC<TCardProps> = React.memo(({ props, onOpen }) => {
  const {
    _id,
    name,
    price,
    image,
    image_large,
    calories,
    proteins,
    fat,
    carbohydrates,
  } = props;

  const location = useLocation();

  const { ingredients } = useSelector((state: any) => state.constructorReducer);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { ...props, onOpen },
  });

  const checkCount = React.useMemo(() => {
    const inCart = ingredients.filter(
      (item: { _id: string }) => item._id === _id
    );
    return inCart.length;
  }, [_id, ingredients]);

  const handlerOpenModal = () => {
    onOpen({
      name: name,
      imageLarge: image_large,
      calories: calories,
      proteins: proteins,
      fat: fat,
      carbohydrates: carbohydrates,
    });
  };

  return (
    <Link
      key={_id}
      to={`/ingredients/${_id}`}
      state={{ background: location }}
      className={classNames(styles.link, {}, [
        "mt-1 text text_type_digits-default",
      ])}
    >
      <li ref={dragRef} onClick={handlerOpenModal} className={styles.item}>
        {checkCount !== 0 && (
          <Counter count={checkCount} size="default" extraClass="m-1" />
        )}
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
          className={classNames(styles.title, {}, [
            "mt-1 text text_type_main-default",
          ])}
        >
          {name}
        </h3>
      </li>
    </Link>
  );
});
