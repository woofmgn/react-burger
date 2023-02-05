import React from "react";
import styles from "./styles.module.css";

export const ModalIngredients = ({ data }) => {
  const { name, imageLarge, calories, proteins, fat, carbohydrates } = data;

  return (
    <>
      <div className={styles.wrapper}>
        <img src={imageLarge} alt="" className="ml-5 mr-5" />
        <p
          className="text text_type_main-medium mt-4"
          style={{ textAlign: "center" }}
        >
          {name}
        </p>
        <ul className={styles.structure}>
          <li className={styles.item}>
            <p className="text text_type_main-default text_color_inactive">
              Калории, ккал
            </p>
            <span className="text text_type_digits-default text_color_inactive">
              {calories}
            </span>
          </li>
          <li className={styles.item}>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <span className="text text_type_digits-default text_color_inactive">
              {proteins}
            </span>
          </li>
          <li className={styles.item}>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <span className="text text_type_digits-default text_color_inactive">
              {fat}
            </span>
          </li>
          <li className={styles.item}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <span className="text text_type_digits-default text_color_inactive">
              {carbohydrates}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
