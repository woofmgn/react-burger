import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useMemo } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TCard } from "../../utils/@types";
import { IngredientCard } from "../IngredientCard/IngredientCard";
import { OrderDate } from "../OrderDate/OrderDate";
import { OrderStatus } from "../OrderStatus/OrderStatus";
import styles from "./styles.module.css";

export const OrderInfo: FC = () => {
  const { orders } = useAppSelector((state) => state.wsReducer);
  const { data } = useAppSelector((state) => state.ingredientsReducer);
  const { id } = useParams();

  const order = useMemo(() => {
    if (orders) {
      return orders.find((itemOrder) => itemOrder._id === id);
    }
  }, [id, orders]);

  const ingredients = useMemo(() => {
    if (data && order) {
      return data.filter((card) => order.ingredients.includes(card._id));
    }
  }, [data, order]);

  const totalPrice = useMemo(() => {
    const ingrArr: TCard[] = [];
    if (order && data) {
      order.ingredients.forEach((ingr) => {
        // eslint-disable-next-line array-callback-return
        data.find((card) => {
          if (ingr === card._id) {
            ingrArr.push(card);
          }
        });
      });
    }

    if (ingrArr) {
      return ingrArr.reduce((acc, item) => {
        return (acc += item.price);
      }, 0);
    }
  }, [data, order]);

  return (
    <>
      {ingredients && (
        <div className={styles.container}>
          <span
            className={classNames(styles.number, {}, [
              "text text_type_digits-default",
            ])}
          >
            {`#${order && order!.number}`}
          </span>
          <h1 className="text text_type_main-medium mt-10 mb-3">
            {order && order.name}
          </h1>
          {order && <OrderStatus status={order.status} />}
          <p className="text text_type_main-medium mt-15">Состав:</p>
          <ul className={styles.list}>
            {ingredients &&
              ingredients.map((card) => {
                return (
                  <IngredientCard
                    key={card._id}
                    id={card._id}
                    name={card.name}
                    image={card.image_mobile!}
                    price={card.price}
                    ingredient={order!.ingredients}
                  />
                );
              })}
          </ul>
          <div className={styles.wrapper}>
            <OrderDate createdDate={order?.createdAt} />
            <div className={styles.price}>
              <span className="text text_type_digits-default mr-2">
                {totalPrice}
              </span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
