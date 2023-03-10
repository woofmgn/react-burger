import { SET_INGREDIENTS } from "../../utils/constants";

const initialState = {
  feedReq: false,
  feedRes: false,
  details: null,
};

export function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INGREDIENTS: {
      return {
        ...state,
        details: {
          name: action.name,
          imageLarge: action.imageLarge,
          // imageLarge: action.image_large,
          calories: action.calories,
          proteins: action.proteins,
          fat: action.fat,
          carbohydrates: action.carbohydrates,
        },
      };
    }
    default: {
      return initialState;
    }
  }
}
