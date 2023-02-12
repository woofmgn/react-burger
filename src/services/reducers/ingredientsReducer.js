import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCES,
} from "../../utils/constants";

const initialState = {
  feedRequest: false,
  feedFailed: false,
  data: [],
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        feedRequest: true,
        feedFailed: false,
      };
    }
    case GET_INGREDIENTS_SUCCES: {
      return {
        ...state,
        data: action.data,
        feedRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        feedFailed: true,
        feedRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
