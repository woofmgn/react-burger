import type { Middleware, MiddlewareAPI } from 'redux';
import { TWsActonsOptions } from '../reducers/wsReducer';
import type { AppDispatch, RootState, TAppActions } from '../store';

export const socketMiddleware = (wsActions: TWsActonsOptions): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

    return next => (action: TAppActions) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { dispatch, getState } = store;
      // @ts-ignore
      const { type, payload } = action;
      const { wsInit, wsSuccess, wsError, wsGetMessage, wsClose } = wsActions;
 
      if (type === wsInit) {
        if (socket) {
          socket.close();
        }
        socket = new WebSocket(payload);
      }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: wsSuccess, payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: wsError, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: wsGetMessage, payload: JSON.parse(data) });
        };

        socket.onclose = event => {
          dispatch({ type: wsClose, payload: event });
        };

        // if (type === WS_SEND_MESSAGE) {
        //   const message = payload;
        //   socket.send(JSON.stringify(message));
        // }

        // if (type === wsClose) {
        //   socket.close();
        // }
      }

      next(action);
    };
    }) as Middleware;
}; 