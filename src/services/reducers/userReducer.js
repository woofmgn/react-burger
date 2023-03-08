import {
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  SET_USER,
  SET_USER_FAILED,
  SET_USER_SUCCESS,
} from "../../utils/constants";

const initialState = {
  feedRequest: false,
  feedFailed: false,
  success: false,
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        feedRequest: true,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        feedRequest: false,
        success: action.success,
        user: action.user,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        feedRequest: false,
        feedFailed: true,
        succes: action.success,
      };
    }
    case SET_USER: {
      return {
        ...state,
        feedRequest: true,
      };
    }
    case SET_USER_SUCCESS: {
      return {
        ...state,
        feedRequest: false,
        success: action.succes,
        user: action.user,
      };
    }
    case SET_USER_FAILED: {
      return {
        ...state,
        feedRequest: false,
        feedFailed: true,
        success: action.success,
      };
    }
    default: {
      return state;
    }
  }
};
