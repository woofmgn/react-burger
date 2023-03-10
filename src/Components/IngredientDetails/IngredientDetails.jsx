import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "../../helpers/classNames";
import { setDetails } from "../../services/actions/details";
import { getIndredients } from "../../services/actions/getIngredients";
import { ingredientsObject } from "../../utils/prop-types";
import styles from "./styles.module.css";

export const IngredientDetails = () => {
  const { details } = useSelector((state) => state.detailsReducer);
  const data = useSelector((state) => state.ingredientsReducer.data);
  const dispatch = useDispatch();

  const { id } = useParams();

  const handleSearchIngredient = useCallback(() => {
    if (data) {
      const obj = data.find((item) => item._id === id);
      dispatch(
        setDetails({
          ...obj,
          imageLarge: obj.image_large,
        })
      );
    }
  }, [data, dispatch, id]);

  useEffect(() => {
    if (!details) {
      dispatch(getIndredients());
    }
  }, [details, dispatch]);

  useEffect(() => {
    handleSearchIngredient();
  }, [handleSearchIngredient, data]);

  return (
    <>
      {details ? (
        <div className={styles.wrapper}>
          <img src={details.imageLarge} alt="" className="ml-5 mr-5" />
          <p
            className={classNames(styles.title, {}, [
              "text text_type_main-medium mt-4",
            ])}
          >
            {details.name}
          </p>
          <ul className={styles.structure}>
            <li className={styles.item}>
              <p className="text text_type_main-default text_color_inactive">
                Калории, ккал
              </p>
              <span className="text text_type_digits-default text_color_inactive">
                {details.calories}
              </span>
            </li>
            <li className={styles.item}>
              <p className="text text_type_main-default text_color_inactive">
                Белки, г
              </p>
              <span className="text text_type_digits-default text_color_inactive">
                {details.proteins}
              </span>
            </li>
            <li className={styles.item}>
              <p className="text text_type_main-default text_color_inactive">
                Жиры, г
              </p>
              <span className="text text_type_digits-default text_color_inactive">
                {details.fat}
              </span>
            </li>
            <li className={styles.item}>
              <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </p>
              <span className="text text_type_digits-default text_color_inactive">
                {details.carbohydrates}
              </span>
            </li>
          </ul>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

IngredientDetails.propTypes = ingredientsObject.propTypes;
