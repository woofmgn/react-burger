import type { Middleware, MiddlewareAPI } from 'redux';

import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START_ALL_ORDERS,
  WS_CONNECTION_START_USER_ORDERS,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from '../../utils/constants';
import { getCookie } from '../../utils/cookies';
import type { AppDispatch, RootState, TAppActions } from '../store';

export const socketMiddleware = (wsUrl: string): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

    return next => (action: TAppActions) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { dispatch, getState } = store;
      // @ts-ignore
      const { type, payload } = action;
 
      if (type === WS_CONNECTION_START_ALL_ORDERS) {
        socket = new WebSocket(`${wsUrl}/all`);
      }

      if (type === WS_CONNECTION_START_USER_ORDERS) {
        const token = getCookie('token')?.replaceAll(' ', '');
        socket = new WebSocket(`${wsUrl}?token=${token}`);
      }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: WS_CONNECTION_ERROR, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: WS_GET_MESSAGE, payload: JSON.parse(data) });
        };

        socket.onclose = event => {
          dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
        };

        if (type === WS_SEND_MESSAGE) {
          const message = payload;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
    }) as Middleware;
}; 