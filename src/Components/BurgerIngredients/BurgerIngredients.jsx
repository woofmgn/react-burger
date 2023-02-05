import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useState } from "react";
// import { data } from "../../utils/data";
import { Bread } from "../Bread/Bread";
import { Filling } from "../Filling/Filling";
import { ModalIngredients } from "../ModalIngredients/ModalIngredients";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { Sauce } from "../Sauce/Sauce";
import styles from "./styles.module.css";

export const BurgerIngredients = ({ dataList }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [current, setCurrent] = useState("one");
  const [breadList, setBreadList] = useState([]);
  const [sauceList, setSauceList] = useState([]);
  const [fillingList, setFillingList] = useState([]);

  const handleOpenModal = (card) => {
    setModalData(card);
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const bun = dataList.filter((item) => item.type === "bun");
    const sauce = dataList.filter((item) => item.type === "sauce");
    const filling = dataList.filter((item) => item.type === "main");
    setBreadList(bun);
    setSauceList(sauce);
    setFillingList(filling);
  }, [dataList]);

  return (
    <section className="pt-10">
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: "flex" }} className="mt-5 mb-10">
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.container}>
        <h2 className="text text_type_main-medium">Булки</h2>
        <ul className={styles.grid}>
          {breadList.map((item) => {
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
        <h2 className="mt-10 text text_type_main-medium">Соусы</h2>
        <ul className={styles.grid}>
          {sauceList.map((item) => {
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
        <h2 className="mt-10 text text_type_main-medium">Начинка</h2>
        <ul className={styles.grid}>
          {fillingList.map((item) => {
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
      <ModalOverlay isOpen={isVisible} onClose={handleCloseModal}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
        <ModalIngredients data={modalData} />
      </ModalOverlay>
    </section>
  );
};
