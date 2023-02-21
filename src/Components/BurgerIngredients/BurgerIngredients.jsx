import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { createRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { classNames } from "../../helpers/classNames";

import { resetDetails, setDetails } from "../../services/actions/details";
import { getIndredients } from "../../services/actions/getIngredients";
import { BUN, FILLING, SAUCE } from "../../utils/constants";
import { Card } from "../Card/Card";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { Modal } from "../Modal/Modal";
import styles from "./styles.module.css";

export const BurgerIngredients = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(BUN);
  // const bunRef = createRef(null);
  // const sauceRef = createRef(null);
  // const fillingRef = createRef(null);
  const containerRef = createRef(null);

  const { data, feedRequest } = useSelector(
    (state) => state.ingredientsReducer
  );

  const dispatch = useDispatch();

  const [bunRef, inViewBun] = useInView({
    /* Optional options */
    root: containerRef.current,
    threshold: 0,
  });

  const [sauceRef, inViewSauce] = useInView({
    /* Optional options */
    root: containerRef.current,
    threshold: 0,
  });

  const [fillingRef, inViewFilling] = useInView({
    /* Optional options */
    root: containerRef.current,
    threshold: 0,
  });

  const handleOpenModal = (card) => {
    dispatch(setDetails(card));
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
    dispatch(resetDetails());
  };

  // const handleScrollToRef = (isRef, str) => {
  //   isRef.current.scrollIntoView({ behavior: "smooth" }, true);
  //   setCurrent(str);
  // };

  React.useEffect(() => {
    dispatch(getIndredients());
  }, [dispatch]);

  React.useEffect(() => {
    if (inViewBun) {
      setCurrent(BUN);
      return;
    }

    if (inViewSauce) {
      setCurrent(SAUCE);
      return;
    }

    if (inViewFilling) {
      setCurrent(FILLING);
      return;
    }
  }, [inViewBun, inViewSauce, inViewFilling]);

  return (
    <section className="pt-10">
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div
        ref={containerRef}
        className={classNames(styles.tabs, {}, ["mt-5 mb-10"])}
      >
        <Tab
          value={BUN}
          active={current === BUN}
          // onClick={() => handleScrollToRef(bunRef, "bun")}
          onClick={() => setCurrent(BUN)}
        >
          Булки
        </Tab>
        <Tab
          value={SAUCE}
          active={current === SAUCE}
          // onClick={() => handleScrollToRef(sauceRef, "sauce")}
          onClick={() => setCurrent(SAUCE)}
        >
          Соусы
        </Tab>
        <Tab
          value={FILLING}
          active={current === FILLING}
          // onClick={() => handleScrollToRef(fillingRef, "filling")}
          onClick={() => setCurrent(FILLING)}
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
              .filter((item) => item.type === BUN)
              .map((item) => {
                return (
                  <Card
                    key={item._id}
                    keyId={uuid()}
                    onOpen={handleOpenModal}
                    props={{ ...item }}
                  />
                );
              })}
          </ul>
          <h2 ref={sauceRef} className="mt-10 text text_type_main-medium">
            Соусы
          </h2>
          <ul className={styles.grid}>
            {data
              .filter((item) => item.type === SAUCE)
              .map((item) => {
                return (
                  <Card
                    key={item._id}
                    keyId={uuid()}
                    onOpen={handleOpenModal}
                    props={{ ...item }}
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
                  <Card
                    key={item._id}
                    keyId={uuid()}
                    onOpen={handleOpenModal}
                    props={{ ...item }}
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
