import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export const Filling = ({ name, price, image }) => {
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
        className="mt-1 text text_type_digits-default"
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

Filling.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
