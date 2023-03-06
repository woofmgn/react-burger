import {
  ADD_USER,
  ADD_USER_FAILED,
  ADD_USER_SUCCES,
} from "../../utils/constants";

const initialState = {
  feedRequest: false,
  feedFailed: false,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        feedRequest: true,
        feedFailed: false,
      };
    }
    case ADD_USER_SUCCES: {
      return {
        ...state,
        user: action.user,
        feedRequest: false,
      };
    }
    case ADD_USER_FAILED: {
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
