import { RESET, SET_INGREDIENTS } from "../../utils/constants";

export const setDetails = (payload) => ({
  type: SET_INGREDIENTS,
  name: payload.name,
  imageLarge: payload.imageLarge,
  calories: payload.calories,
  proteins: payload.proteins,
  fat: payload.fat,
  carbohydrates: payload.carbohydrates,
});

export const resetDetails = () => ({
  type: RESET,
  name: "",
  imageLarge: "",
  calories: "",
  proteins: "",
  fat: "",
  carbohydrates: "",
});
