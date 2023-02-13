import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { classNames } from "../../helpers/classNames";
import { imgBun } from "../../utils/constants";
// import { Ingredient } from "../Ingredient/Ingredient";
import { Modal } from "../Modal/Modal";
import { OrderDetails } from "../ModalOrder/OrderDetails";
import styles from "./styles.module.css";

// export const BurgerConstructor = React.memo(({ dataList }) => {
export const BurgerConstructor = React.memo(() => {
  // const [ingredients, setIngredients] = React.useState([]);
  const [isVisible, setIsVisible] = React.useState(false);

  const handleToggleOpenModal = () => {
    setIsVisible((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  // const calculateTotalOrder = React.useMemo(() => {
  //   return dataList.reduce((acc, item) => {
  //     return acc + item.price;
  //   }, 0);
  // }, [dataList]);

  // React.useEffect(() => {
  //   if (dataList) {
  //     setIngredients(dataList);
  //   }
  // }, [dataList]);

  return (
    <section className={styles.section}>
      <div className={classNames(styles.container, {}, ["ml-4"])}>
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={imgBun}
          />
        </div>
        <ul className={styles.list}>
          {/* {ingredients.map((item) => {
            return (
              <Ingredient
                key={item._id}
                price={item.price}
                name={item.name}
                image={item.image}
              />
            );
          })} */}
        </ul>
        <div className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={imgBun}
          />
        </div>
      </div>
      <div className={classNames(styles.wrapper, {}, ["mt-10"])}>
        <p
          className={classNames(styles.total, {}, [
            "text text_type_digits-medium mr-10",
          ])}
        >
          {/* {calculateTotalOrder} */}
          {123}
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
