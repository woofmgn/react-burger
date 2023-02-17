import {
  ADD_INGREDIENTS,
  REMOVE_ALL_INGREDIENTS,
  REMOVE_INGREDIENTS,
  REPLASE_INGREDIENT,
} from "../../utils/constants";

export const addIngredients = (payload) => ({
  type: ADD_INGREDIENTS,
  _id: payload.id,
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

export const removeIngredients = (index) => ({
  type: REMOVE_INGREDIENTS,
  index: index,
});

export const removeAllIngredients = () => ({
  type: REMOVE_ALL_INGREDIENTS,
  ingredients: [],
});

export const replaceIngredient = (payload) => {
  return {
    type: REPLASE_INGREDIENT,
    dragItem: payload.item.index,
    hoverItem: payload.index,
  };
};
