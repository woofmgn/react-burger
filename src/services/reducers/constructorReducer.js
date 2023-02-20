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
      } else if (action.types !== "bun" && state.ingredients.length > 0) {
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
      } else {
        return {
          ...state,
        };
      }
    }
    case REMOVE_INGREDIENTS: {
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item.keyId !== action.keyId
        ),
      };
    }
    case REMOVE_ALL_INGREDIENTS: {
      return action;
    }
    case REPLASE_INGREDIENT: {
      const newState = [...state.ingredients];
      const dragIndex = newState.findIndex(
        (item) => item.keyId === action.dragItem
      );
      const hoverIndex = newState.findIndex(
        (item) => item.keyId === action.hoverItem
      );
      newState[dragIndex] = state.ingredients[hoverIndex];
      newState[hoverIndex] = state.ingredients[dragIndex];
      newState[hoverIndex].keyId = action.dragItem;
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
