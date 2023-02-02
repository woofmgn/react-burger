import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientItem } from "../../utils/prop-types";

export const Sauce = ({ name, price, image }) => {
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Counter count={0} size="default" extraClass="m-1" />
      <img className="ml-4 mr-4" src={image} alt="ингредиент" />
      <span
        className="mt-1 text text text_type_digits-default"
        style={{ display: "flex", gap: "8px" }}
      >
        {price}
        <CurrencyIcon type="primary" />
      </span>
      <h3
        style={{ textAlign: "center" }}
        className="mt-1 text text_type_main-default"
      >
        {name}
      </h3>
    </li>
  );
};

Sauce.propTypes = ingredientItem.PropTypes;
