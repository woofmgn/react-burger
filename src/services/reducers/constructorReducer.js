import {
  ADD_INGREDIENTS,
  REMOVE_ALL_INGREDIENTS,
  REMOVE_INGREDIENTS,
  REPLASE_INGREDIENT,
} from "../../utils/constants";

const initialState = {
  feedRequest: false,
  feedFailed: false,
  ingredients: [],
};

export function constructorReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INGREDIENTS: {
      if (action.types === "bun") {
        const fiteredBun = [...state.ingredients].filter(
          (item) => item.types !== "bun"
        );
        return {
          ...state,
          ingredients: [action, ...fiteredBun, action],
        };
      } else if (action.types !== "bun" && state.ingredients.length === 0) {
        return {
          ...state,
          ingredients: [...state.ingredients, action],
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
    case REMOVE_INGREDIENTS: {
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item, index) => index !== action.index + 1
        ),
      };
    }
    case REMOVE_ALL_INGREDIENTS: {
      return action;
    }
    case REPLASE_INGREDIENT: {
      const newState = [...state.ingredients];
      newState[action.dragItem] = state.ingredients[action.hoverItem];
      newState[action.hoverItem] = state.ingredients[action.dragItem];
      return {
        ...state,
        ingredients: newState,
      };
    }
    default: {
      return state;
    }
  }
}
