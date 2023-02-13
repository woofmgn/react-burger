import { RESET, SET_INGREDIENTS } from "../../utils/constants";

const initialState = {
  feedReq: false,
  feedRes: false,
  name: "",
  imageLarge: "",
  calories: "",
  proteins: "",
  fat: "",
  carbohydrates: "",
};

export function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INGREDIENTS: {
      return {
        ...state,
        name: action.name,
        imageLarge: action.imageLarge,
        calories: action.calories,
        proteins: action.proteins,
        fat: action.fat,
        carbohydrates: action.carbohydrates,
      };
    }
    case RESET: {
      return {
        state,
      };
    }
    default: {
      return state;
    }
  }
}
