import React from "react";
import styles from "./styles.module.css";

export const ModalIngredients = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img
          src={"https://code.s3.yandex.net/react/code/meat-01-large.png"}
          alt=""
          className="ml-5 mr-5"
        />
        <p
          className="text text_type_main-medium mt-4"
          style={{ textAlign: "center" }}
        >
          Биокотлета из марсианской Магнолии
        </p>
        <ul className={styles.structure}>
          <li className={styles.item}>
            <p className="text text_type_main-default text_color_inactive">
              Калории, ккал
            </p>
            <span className="text text_type_digits-default text_color_inactive">
              224,4
            </span>
          </li>
          <li className={styles.item}>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <span className="text text_type_digits-default text_color_inactive">
              12,2
            </span>
          </li>
          <li className={styles.item}>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <span className="text text_type_digits-default text_color_inactive">
              17,2
            </span>
          </li>
          <li className={styles.item}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <span className="text text_type_digits-default text_color_inactive">
              10,2
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
