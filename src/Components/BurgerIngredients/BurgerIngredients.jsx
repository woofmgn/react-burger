import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { createRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetDetails, setDetails } from "../../services/actions/details";
import { getIndredients } from "../../services/actions/getIngredients";
import { Bread } from "../Bread/Bread";
import { Filling } from "../Filling/Filling";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../ModalIngredients/IngredientDetails";
import { Sauce } from "../Sauce/Sauce";
import styles from "./styles.module.css";

export const BurgerIngredients = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState("one");
  const bunRef = createRef(null);
  const sauceRef = createRef(null);
  const fillingRef = createRef(null);

  const { data, feedRequest } = useSelector(
    (state) => state.ingredientsReducer
  );
  const dispatch = useDispatch();

  const handleOpenModal = (card) => {
    dispatch(setDetails(card));
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
    dispatch(resetDetails());
  };

  const handleScrollToRef = (isRef, str) => {
    isRef.current.scrollIntoView({ behavior: "smooth" }, true);
    setCurrent(str);
  };

  React.useEffect(() => {
    dispatch(getIndredients());
  }, [dispatch]);

  return (
    <section className="pt-10">
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: "flex" }} className="mt-5 mb-10">
        <Tab
          value="one"
          active={current === "one"}
          onClick={() => handleScrollToRef(bunRef, "one")}
        >
          Булки
        </Tab>
        <Tab
          value="two"
          active={current === "two"}
          onClick={() => handleScrollToRef(sauceRef, "two")}
        >
          Соусы
        </Tab>
        <Tab
          value="three"
          active={current === "three"}
          onClick={() => handleScrollToRef(fillingRef, "three")}
        >
          Начинки
        </Tab>
      </div>
      {feedRequest ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.container}>
          <h2 ref={bunRef} className="text text_type_main-medium">
            Булки
          </h2>
          <ul className={styles.grid}>
            {data
              .filter((item) => item.type === "bun")
              .map((item) => {
                return (
                  <Bread
                    key={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    imageLarge={item.image_large}
                    calories={item.calories}
                    proteins={item.proteins}
                    fat={item.fat}
                    carbohydrates={item.carbohydrates}
                    onOpen={handleOpenModal}
                  />
                );
              })}
          </ul>
          <h2 ref={sauceRef} className="mt-10 text text_type_main-medium">
            Соусы
          </h2>
          <ul className={styles.grid}>
            {data
              .filter((item) => item.type === "sauce")
              .map((item) => {
                return (
                  <Sauce
                    key={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    imageLarge={item.image_large}
                    calories={item.calories}
                    proteins={item.proteins}
                    fat={item.fat}
                    carbohydrates={item.carbohydrates}
                    onOpen={handleOpenModal}
                  />
                );
              })}
          </ul>
          <h2 ref={fillingRef} className="mt-10 text text_type_main-medium">
            Начинка
          </h2>
          <ul className={styles.grid}>
            {data
              .filter((item) => item.type === "main")
              .map((item) => {
                return (
                  <Filling
                    key={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    imageLarge={item.image_large}
                    calories={item.calories}
                    proteins={item.proteins}
                    fat={item.fat}
                    carbohydrates={item.carbohydrates}
                    onOpen={handleOpenModal}
                  />
                );
              })}
          </ul>
        </div>
      )}
      <Modal
        children={<IngredientDetails />}
        isOpen={isVisible}
        onClose={handleCloseModal}
        title={"Детали ингредиента"}
      />
    </section>
  );
});
