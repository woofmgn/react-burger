import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, useCallback } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { classNames } from "../../helpers/classNames";

import {
  addIngredients,
  removeAllIngredients,
} from "../../services/actions/constructor";
import { removeOrder, setOrder } from "../../services/actions/order";
import { TCard } from "../../utils/@types";
import { BUN } from "../../utils/constants";
import { Ingredient } from "../Ingredient/Ingredient";
import { Modal } from "../Modal/Modal";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import styles from "./styles.module.css";

type TIngredietsData = {
  keyId: string;
  types: string;
  onOpen: () => void;
} & TCard;

export const BurgerConstructor: FC = React.memo(() => {
  const [isVisible, setIsVisible] = React.useState(false);

  const ingredients = useSelector(
    (state: any) => state.constructorReducer.ingredients
  );
  const { success } = useSelector((state: any) => state.orderReducer);
  const { logged } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [, dropTargetRef] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch(addIngredients(item));
    },
  });

  const handleToggleOpenModal = useCallback(() => {
    if (logged) {
      const newOrder: string[] = [];
      ingredients.forEach((item: TIngredietsData) => newOrder.push(item._id));
      // @ts-ignore
      dispatch(setOrder(newOrder));
      setIsVisible((prev) => !prev);
    } else {
      navigate("/login");
    }
  }, [dispatch, ingredients, logged, navigate]);

  const handleCloseModal = useCallback(() => {
    dispatch(removeAllIngredients());
    dispatch(removeOrder());
    setIsVisible(false);
  }, [dispatch]);

  const filteredBun = React.useMemo(() => {
    return ingredients.filter((item: TIngredietsData) => item.types === BUN);
  }, [ingredients]);

  const calculateTotalOrder = React.useMemo(() => {
    return ingredients.reduce((acc: number, item: { price: number }) => {
      return acc + item.price;
    }, 0);
  }, [ingredients]);

  return (
    <section className={styles.section}>
      <div
        ref={dropTargetRef}
        className={classNames(styles.container, {}, ["ml-4"])}
      >
        {filteredBun[0] && (
          <div className="ml-8">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${filteredBun[0].name} (верх)`}
              price={filteredBun[0].price}
              thumbnail={filteredBun[0].image}
            />
          </div>
        )}
        <ul className={styles.list}>
          {ingredients.length ? (
            ingredients.map((item: TIngredietsData) => {
              if (item.types !== BUN) {
                return <Ingredient key={item.keyId} element={item} />;
              }
              return null;
            })
          ) : (
            <li className={styles.text}>Сначала добавьте булочку</li>
          )}
        </ul>
        {filteredBun[0] && (
          <div className="ml-8">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${filteredBun[0].name} (низ)`}
              price={filteredBun[0].price}
              thumbnail={filteredBun[0].image}
            />
          </div>
        )}
      </div>
      <div className={classNames(styles.wrapper, {}, ["mt-10"])}>
        <p
          className={classNames(styles.total, {}, [
            "text text_type_digits-medium mr-10",
          ])}
        >
          {calculateTotalOrder}
          <CurrencyIcon type="primary" />
        </p>
        <Button
          onClick={handleToggleOpenModal}
          htmlType="button"
          type="primary"
          size="large"
          disabled={!ingredients.length}
        >
          Оформить заказ
        </Button>
      </div>
      {success && isVisible && (
        <Modal children={<OrderDetails />} onClose={handleCloseModal} />
      )}
    </section>
  );
});
