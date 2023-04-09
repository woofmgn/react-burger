import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { classNames } from "../../helpers/classNames";
import { IngredientCard } from "../IngredientCard/IngredientCard";
import { OrderStatus } from "../OrderStatus/OrderStatus";
import styles from "./styles.module.css";

export const OrderInfo = () => {
  return (
    <div className={styles.container}>
      <span
        className={classNames(styles.number, {}, [
          "text text_type_digits-default",
        ])}
      >
        #657567
      </span>
      <h1 className="text text_type_main-medium mt-10 mb-3">
        Black Hole Singularity острый бургер
      </h1>
      <OrderStatus status={"Создан"} />
      <p className="text text_type_main-medium mt-15">Состав:</p>
      <ul className={styles.list}>
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
      </ul>
      <div className={styles.wrapper}>
        <span className="text text_type_main-default text_color_inactive">
          Вчера, 17:50
        </span>
        <div className={styles.price}>
          <span className="text text_type_digits-default mr-2">510</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
