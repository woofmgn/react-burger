import {
  SET_ORDER,
  SET_ORDER_FAILED,
  SET_ORDER_SUCCES,
} from "../../utils/constants";

const initialState = {
  feedReq: false,
  feedFailed: false,
  name: "",
  order: {},
  success: false,
};

export function orderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDER: {
      return {
        ...state,
        feedReq: true,
        feedFailed: false,
      };
    }
    case SET_ORDER_SUCCES: {
      console.log(action);
      return {
        ...state,
        ...action,
        feedReq: false,
      };
    }
    case SET_ORDER_FAILED: {
      return {
        ...state,
        feedReq: false,
        feedFailed: true,
      };
    }
    default: {
      return state;
    }
  }
}
