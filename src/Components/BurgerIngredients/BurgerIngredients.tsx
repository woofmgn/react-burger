import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { createRef, FC, useCallback, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "../../helpers/classNames";
import { setDetails } from "../../services/actions/details";
// import { getIndredients } from "../../services/actions/getIngredients";
import { BUN, FILLING, SAUCE } from "../../utils/constants";
import { Card } from "../Card/Card";
import styles from "./styles.module.css";

type TData = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export const BurgerIngredients: FC = React.memo(() => {
  const [current, setCurrent] = useState(BUN);
  // const bunRef = createRef(null);
  // const sauceRef = createRef(null);
  // const fillingRef = createRef(null);
  const containerRef = createRef<HTMLDivElement>();

  const { data, feedRequest }: { data: TData[]; feedRequest: boolean } =
    useSelector((state: any) => state.ingredientsReducer);

  const dispatch = useDispatch();

  const [bunRef, inViewBun] = useInView({
    root: containerRef.current,
    threshold: 0,
  });

  const [sauceRef, inViewSauce] = useInView({
    root: containerRef.current,
    threshold: 0,
  });

  const [fillingRef, inViewFilling] = useInView({
    root: containerRef.current,
    threshold: 0,
  });

  const handleOpenModal = useCallback(
    (card: any) => {
      dispatch(setDetails(card));
    },
    [dispatch]
  );

  // код закомментирован для себя, планирую переделать реализацию intersection observer

  // const handleScrollToRef = (isRef, str) => {
  //   isRef.current.scrollIntoView({ behavior: "smooth" }, true);
  //   setCurrent(str);
  // };

  // React.useEffect(() => {
  //   // @ts-ignore
  //   dispatch(getIndredients());
  // }, [dispatch]);

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
            {data &&
              data
                .filter((item) => item.type === BUN)
                .map((item) => {
                  return (
                    <Card
                      key={item._id}
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
            {data &&
              data
                .filter((item) => item.type === SAUCE)
                .map((item) => {
                  return (
                    <Card
                      key={item._id}
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
            {data &&
              data
                .filter((item) => item.type === "main")
                .map((item) => {
                  return (
                    <Card
                      key={item._id}
                      onOpen={handleOpenModal}
                      props={{ ...item }}
                    />
                  );
                })}
          </ul>
        </div>
      )}
    </section>
  );
});
