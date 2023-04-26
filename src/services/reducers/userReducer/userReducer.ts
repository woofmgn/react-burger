import {
  ADD_USER,
  ADD_USER_FAILED,
  ADD_USER_SUCCES,
  AUTH_CHECKED,
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  REMOVE_USER,
  SET_USER,
  SET_USER_FAILED,
  SET_USER_SUCCESS
} from "../../../utils/constants";
import { IUserActions, TCurrentUser } from '../../actions/user';

type TUserState = {
  feedRequest: boolean;
  feedFailed: boolean;
  logged: boolean;
  user: TCurrentUser | null;
}

export const initialState: TUserState = {
  feedRequest: false,
  feedFailed: false,
  logged: false,
  user: null,
};

export const userReducer = (state = initialState, action: IUserActions): TUserState => {
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
        logged: true,
        user: action.user,
        feedRequest: false,
      };
    }
    case ADD_USER_FAILED: {
      return {
        ...state,
        logged: false,
        feedFailed: true,
        feedRequest: false,
      };
    }
    case AUTH_CHECKED: {
      return state
    }
    case REMOVE_USER: {
      return {
        ...state,
        feedRequest: false,
        feedFailed: false,
        logged: false,
        user: null,
      };
    }
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
        logged: true,
        user: action.user,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        feedRequest: false,
        feedFailed: true,
        logged: false,
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
        user: action.user,
      };
    }
    case SET_USER_FAILED: {
      return {
        ...state,
        feedRequest: false,
        feedFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
