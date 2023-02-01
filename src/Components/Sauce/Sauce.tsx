import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const Sauce = ({ name, price, image }: any) => {
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img className="ml-4 mr-4" src={image} alt="ингредиент" />
      <span
        className="mt-1 text text_type_main-default"
        style={{ display: "flex", gap: "8px" }}
      >
        {price}
        <CurrencyIcon type="primary" />
      </span>
      <h3 className="mt-1 text text_type_main-default">{name}</h3>
    </li>
  );
};
