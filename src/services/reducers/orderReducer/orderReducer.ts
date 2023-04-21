import {
  SET_ORDER,
  SET_ORDER_FAILED,
  SET_ORDER_REMOVE,
  SET_ORDER_SUCCES,
} from "../../../utils/constants";
import { ISetOrderActions } from '../../actions/order';

type TOrderState = {
  feedReq: boolean;
  feedFailed: boolean;
  name: string;
  order: {
    number: number
  } | null;
  success: boolean;
}

export const initialState: TOrderState = {
  feedReq: false,
  feedFailed: false,
  name: "",
  order: null,
  success: false,
};

export function orderReducer(state = initialState, action: ISetOrderActions): TOrderState {
  switch (action.type) {
    case SET_ORDER: {
      return {
        ...state,
        feedReq: true,
        feedFailed: false,
      };
    }
    case SET_ORDER_SUCCES: {
      return {
        ...state,
        // @ts-ignore
        ...action.order,
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
    case SET_ORDER_REMOVE: {
      return {
        ...state,
        feedReq: false,
        feedFailed: false,
        name: "",
        order: null,
        success: false,
      };
    }
    default: {
      return state;
    }
  }
}
