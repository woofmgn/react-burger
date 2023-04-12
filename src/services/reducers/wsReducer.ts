import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from '../../utils/constants';

export type WSOrders = {
  ingredients: string[];
  _id: string;
  status: string;
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
}

interface IWSConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
}

interface IWSConnetionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

interface IWSConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
}

interface IWSConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

interface IWSGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  payload: {
    totalToday: number;
    total: number;
    orders: WSOrders[];
  };
}

interface IWSSendMessageAction {
  readonly type: typeof WS_SEND_MESSAGE;
  payload: any;
}

export type TWSActions =
  | IWSConnectionStartAction
  | IWSConnetionSuccessAction
  | IWSConnectionErrorAction
  | IWSConnectionClosedAction
  | IWSGetMessageAction
  | IWSSendMessageAction;

export type TWSState = {
  wsConnection: boolean;
  success: boolean;
  orders: WSOrders[] | null;
  total: number;
  totalToday: number;
  error?: Event;
}

const initialState: TWSState = {
  wsConnection: false,
  success: false,
  orders: null,
  total: 0,
  totalToday: 0,
}

export const wsReducer = (state = initialState, action: TWSActions) => {
  switch (action.type) {
    case WS_CONNECTION_START:
      return {
        ...state,
        error: undefined
      };
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnection: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnection: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnection: false,
      };
    case WS_GET_MESSAGE:
      // console.log(action.payload.total, 'total')
      return {
        ...state,
        error: undefined,
        success: true,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    default:
      return state;
  }
};