import React from "react";
import { useSelector } from "react-redux";
import { classNames } from "../../helpers/classNames";
import { ingredientsObject } from "../../utils/prop-types";
import styles from "./styles.module.css";

export const IngredientDetails = () => {
  const { name, imageLarge, calories, proteins, fat, carbohydrates } =
    useSelector((state) => state.detailsReducer.details);

  return (
    <>
      <div className={styles.wrapper}>
        <img src={imageLarge} alt="" className="ml-5 mr-5" />
        <p
          className={classNames(styles.title, {}, [
            "text text_type_main-medium mt-4",
          ])}
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

IngredientDetails.propTypes = ingredientsObject.propTypes;
