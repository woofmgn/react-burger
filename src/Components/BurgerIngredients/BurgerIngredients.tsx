import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useState } from "react";
import { data } from "../../utils/data";
import { Bread } from "../Bread/Bread";
import { Filling } from "../Filling/Filling";
import { Sauce } from "../Sauce/Sauce";
import styles from "./styles.module.css";

export const BurgerIngredients = () => {
  const [current, setCurrent] = useState("one");
  const [breadList, setBreadList] = useState<any>([]);
  const [sauceList, setSauceList] = useState<any>([]);
  const [fillingList, setFillingList] = useState<any>([]);

  useEffect(() => {
    const bun = data.filter((item) => item.type === "bun");
    const sauce = data.filter((item) => item.type === "sauce");
    const filling = data.filter((item) => item.type === "main");
    setBreadList(bun);
    setSauceList(sauce);
    setFillingList(filling);
  }, []);

  return (
    <section className="pt-10">
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: "flex" }} className="mt-5">
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
      <h2 className="mt-10 text text_type_main-medium">Булки</h2>
      <ul className={styles.grid}>
        {breadList.map((item: any) => {
          return (
            <Bread
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </ul>
      <h2 className="mt-10 text text_type_main-medium">Соусы</h2>
      <ul className={styles.grid}>
        {sauceList.map((item: any) => {
          return (
            <Sauce
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </ul>
      <h2 className="mt-10 text text_type_main-medium">Начинка</h2>
      <ul className={styles.grid}>
        {fillingList.map((item: any) => {
          return (
            <Filling
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </ul>
    </section>
  );
};