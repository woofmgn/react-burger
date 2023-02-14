import { SET_ORDER } from "../../utils/constants";

const initialState = {
  feedReq: false,
  feedRes: false,
  order: 0,
  ingredients: [],
};

export function orderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDER: {
      return {
        ...state,
        feedRes: true,
        order: state.order + 1,
        ingredients: action,
      };
    }
    default: {
      return state;
    }
  }
}
