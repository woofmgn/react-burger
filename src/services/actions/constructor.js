import { ADD_INGREDIENTS } from "../../utils/constants";

export const addIngredients = (payload) => ({
  type: ADD_INGREDIENTS,
  id: payload.id,
  name: payload.name,
  price: payload.price,
  image: payload.image,
  imageLarge: payload.imageLarge,
  calories: payload.calories,
  proteins: payload.proteins,
  fat: payload.fat,
  carbohydrates: payload.carbohydrates,
  types: payload.type,
});
