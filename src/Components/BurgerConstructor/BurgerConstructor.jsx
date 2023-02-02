import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useState } from "react";
import { data } from "../../utils/data";
import { ingredientsObject } from "../../utils/prop-types";
import { Ingredient } from "../Ingredient/Ingredient";
import styles from "./styles.module.css";

const img = "https://code.s3.yandex.net/react/code/bun-02.png";

export const BurgerConstructor = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (data) {
      setIngredients(data);
    }
  }, []);

  return (
    <section className={styles.section}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        className="ml-4"
      >
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={img}
          />
        </div>
        <ul className={styles.list}>
          {ingredients.map((item) => {
            return (
              <Ingredient
                key={item._id}
                price={item.price}
                name={item.name}
                image={item.image}
              />
            );
          })}
        </ul>
        <div className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
          />
        </div>
      </div>
      <div
        className="mt-10"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <p
          className="text text_type_digits-medium mr-10"
          style={{ display: "flex", gap: "8px", alignItems: "center" }}
        >
          {"20"}
          <CurrencyIcon type="primary" />
        </p>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = ingredientsObject.PropTypes;
