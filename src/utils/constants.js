// export const API_URL = "https://norma.nomoreparties.space/api/ingredients";
// export const API_ORDER_URL = 'https://norma.nomoreparties.space/api/orders';
export const imgBun = "https://code.s3.yandex.net/react/code/bun-02.png";

const API_URL = {
  urlGetData: "https://norma.nomoreparties.space/api/ingredients",
  urlNewOrder: "https://norma.nomoreparties.space/api/orders",
};

const GET_INGREDIENTS = "GET_INGREDIENTS";
const GET_INGREDIENTS_SUCCES = "GET_INGREDIENTS_SUCCES";
const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
const SET_INGREDIENTS = "SET_INGREDIENTS";
const ADD_INGREDIENTS = "ADD_INGREDIENTS";
const REMOVE_INGREDIENTS = "REMOVE_INGREDIENTS";
const REMOVE_ALL_INGREDIENTS = "REMOVE_ALL_INGREDIENTS";
const SET_ORDER = "SET_ORDER";
const SET_ORDER_SUCCES = "SET_ORDER_SUCCES";
const SET_ORDER_FAILED = "SET_ORDER_SUCCES";
const SET_ORDER_REMOVE = "SET_ORDER_REMOVE";
const RESET = "RESET";

export {
  API_URL,
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCES,
  GET_INGREDIENTS_FAILED,
  SET_INGREDIENTS,
  SET_ORDER_SUCCES,
  SET_ORDER_FAILED,
  SET_ORDER_REMOVE,
  ADD_INGREDIENTS,
  REMOVE_INGREDIENTS,
  REMOVE_ALL_INGREDIENTS,
  SET_ORDER,
  RESET,
};
