import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { classNames } from "../../helpers/classNames";
import { addIngredients } from "../../services/actions/constructor";
import { Ingredient } from "../Ingredient/Ingredient";
import { Modal } from "../Modal/Modal";
import { OrderDetails } from "../ModalOrder/OrderDetails";
import styles from "./styles.module.css";

export const BurgerConstructor = React.memo(() => {
  const ingredients = useSelector(
    (state) => state.constructorReducer.ingredients
  );
  const [isVisible, setIsVisible] = React.useState(false);
  const dispatch = useDispatch();
  const [, dropTargetRef] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch(addIngredients(item));
    },
  });

  const handleToggleOpenModal = () => {
    setIsVisible((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  const filteredBun = React.useMemo(() => {
    return ingredients.filter((item) => item.types === "bun");
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
          {ingredients
            .filter((item) => item.types !== "bun")
            .map((item, index) => {
              return (
                <Ingredient
                  key={uuid()}
                  price={item.price}
                  name={item.name}
                  image={item.image}
                  id={item._id}
                  index={index}
                />
              );
            })}
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
        >
          Оформить заказ
        </Button>
      </div>
      <Modal
        children={<OrderDetails />}
        isOpen={isVisible}
        onClose={handleCloseModal}
      />
    </section>
  );
});

// BurgerConstructor.propTypes = {
//   dataList: ingredientsArr,
// };
