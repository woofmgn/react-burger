import React from "react";
import styles from "./styles.module.css";

export const ModalOrder = () => {
  return (
    <div className={styles.wrapper} style={{ textAlign: "center" }}>
      <h2
        className="text text_type_digits-large"
        style={{
          textShadow:
            "0px 0px 16px rgba(51, 51, 255, 0.25), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5)",
        }}
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
