import { ADD_INGREDIENTS } from "../../utils/constants";

const initialState = {
  feedRequest: false,
  feedFailed: false,
  ingredients: [],
};

export function constructorReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INGREDIENTS: {
      return {
        ...state,
        ingredients: [...state.ingredients, action],
      };
    }
    default: {
      return state;
    }
  }
}
