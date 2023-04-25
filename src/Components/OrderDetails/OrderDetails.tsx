import { FC } from "react";
import { classNames } from "../../helpers/classNames";
import { useAppSelector } from "../../hooks/useAppSelector";
import styles from "./styles.module.css";

export const OrderDetails: FC = () => {
  const { order } = useAppSelector((state) => state.orderReducer);

  return (
    <div className={styles.wrapper} style={{ textAlign: "center" }}>
      <h2
        className={classNames(styles.title, {}, [
          "text text_type_digits-large",
        ])}
      >
        {order!.number}
      </h2>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <div className={styles.icon}></div>
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};
