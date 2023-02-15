import { ADD_INGREDIENTS } from "../../utils/constants";

const initialState = {
  feedRequest: false,
  feedFailed: false,
  ingredients: [],
};

export function constructorReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INGREDIENTS: {
      if (action.types === "bun") {
        return {
          ...state,
          ingredients: [action, ...state.ingredients, action],
        };
      } else {
        const mainIngredients = [...state.ingredients].slice(1, -1);
        return {
          ...state,
          ingredients: [
            state.ingredients[0],
            ...mainIngredients,
            action,
            state.ingredients[state.ingredients.length - 1],
          ],
        };
      }
    }
    default: {
      return state;
    }
  }
}
