import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "../../helpers/classNames";

import {
  addIngredients,
  removeAllIngredients,
} from "../../services/actions/constructor";
import { removeOrder, setOrder } from "../../services/actions/order";
import { BUN } from "../../utils/constants";
import { Ingredient } from "../Ingredient/Ingredient";
import { Modal } from "../Modal/Modal";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import styles from "./styles.module.css";

export const BurgerConstructor = React.memo(() => {
  const [isVisible, setIsVisible] = React.useState(false);

  const ingredients = useSelector(
    (state) => state.constructorReducer.ingredients
  );
  const { success } = useSelector((state) => state.orderReducer);
  const dispatch = useDispatch();

  const [, dropTargetRef] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch(addIngredients(item));
    },
  });

  const handleToggleOpenModal = useCallback(() => {
    let newOrder = [];
    ingredients.forEach((item) => newOrder.push(item._id));
    dispatch(setOrder(newOrder));
    setIsVisible((prev) => !prev);
  }, [dispatch, ingredients]);

  const handleCloseModal = useCallback(() => {
    dispatch(removeAllIngredients());
    dispatch(removeOrder());
    setIsVisible(false);
  }, [dispatch]);

  const filteredBun = React.useMemo(() => {
    return ingredients.filter((item) => item.types === BUN);
  }, [ingredients]);

  const calculateTotalOrder = React.useMemo(() => {
    return ingredients.reduce((acc, item) => {
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
            ingredients.map((item) => {
              if (item.types !== BUN) {
                return (
                  <Ingredient
                    key={item.keyId}
                    keyId={item.keyId}
                    price={item.price}
                    name={item.name}
                    image={item.image}
                    elem={item}
                  />
                );
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
      {success && (
        <Modal
          children={<OrderDetails />}
          isOpen={isVisible}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
});
