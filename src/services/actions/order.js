import { SET_ORDER } from "../../utils/constants";

export const setOrder = (payload) => ({
  type: SET_ORDER,
  order: 0,
  ingredients: [],
});
