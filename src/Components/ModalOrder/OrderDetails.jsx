import React from "react";
import { classNames } from "../../helpers/classNames";
import styles from "./styles.module.css";

export const OrderDetails = () => {
  return (
    <div className={styles.wrapper} style={{ textAlign: "center" }}>
      <h2
        className={classNames(styles.title, {}, [
          "text text_type_digits-large",
        ])}
      >
        034536
      </h2>
      <p className="text text_type_main-medium mt-8">индентификатор заказа</p>
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