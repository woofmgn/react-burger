import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { useAppSelector } from "../../hooks/useAppSelector";
import { IngredientCard } from "../IngredientCard/IngredientCard";
import { OrderStatus } from "../OrderStatus/OrderStatus";
import styles from "./styles.module.css";

export const OrderInfo = () => {
  const { orders } = useAppSelector((state) => state.wsReducer);
  const { data } = useAppSelector((state) => state.ingredientsReducer);

  const { id } = useParams();

  const order = useMemo(() => {
    if (orders) {
      return orders.find((itemOrder) => itemOrder._id === id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const ingredients = useMemo(() => {
    if (data && order) {
      return data.filter((card) => order.ingredients.includes(card._id));
    }
  }, [data, order]);

  const totalPrice = () => {
    if (ingredients) {
      return ingredients.reduce((acc, item) => {
        if (item.type === "bun") {
          return (acc += item.price * 2);
        }
        return (acc += item.price);
      }, 0);
    }
  };

  return (
    <div className={styles.container}>
      <span
        className={classNames(styles.number, {}, [
          "text text_type_digits-default",
        ])}
      >
        {`#${order && order.number}`}
      </span>
      <h1 className="text text_type_main-medium mt-10 mb-3">
        Black Hole Singularity острый бургер
      </h1>
      {order && (
        <OrderStatus
          status={order && order!.status === "done" ? "Выполнен" : "Создан"}
        />
      )}
      <p className="text text_type_main-medium mt-15">Состав:</p>
      <ul className={styles.list}>
        {ingredients &&
          ingredients.map((card) => {
            return (
              <IngredientCard
                key={card._id}
                name={card.name}
                image={card.image_mobile!}
                price={card.price}
                type={card.type!}
              />
            );
          })}
      </ul>
      <div className={styles.wrapper}>
        <span className="text text_type_main-default text_color_inactive">
          Вчера, 17:50
        </span>
        <div className={styles.price}>
          <span className="text text_type_digits-default mr-2">
            {totalPrice()}
          </span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
