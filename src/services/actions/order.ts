import { api } from "../../api/Api";
import {
  SET_ORDER,
  SET_ORDER_FAILED,
  SET_ORDER_REMOVE,
  SET_ORDER_SUCCES,
} from "../../utils/constants";
import { AppDispatch } from '../store';

type TOrderRes = {
  name: string;
  order: {
    number: number;
  };
  success: boolean;
}

interface ISetOrderSuccessAction {
  readonly type: typeof SET_ORDER_SUCCES;
  order: TOrderRes;
}

interface ISetOrderAction {
  readonly type: typeof SET_ORDER
}

interface ISetOrderFailedAction {
  readonly type: typeof SET_ORDER_FAILED
}

interface ISetOrderRemove {
  readonly type: typeof SET_ORDER_REMOVE
}

export type ISetOrderActions = 
  | ISetOrderAction
  | ISetOrderSuccessAction
  | ISetOrderFailedAction
  | ISetOrderRemove;

export const setOrderAction = (): ISetOrderAction => ({
  type: SET_ORDER
})

export const setOrderSuccessAction = (order: TOrderRes): ISetOrderSuccessAction => ({
  type: SET_ORDER_SUCCES,
  order: order
})

export const setOrderFailedAction = (): ISetOrderFailedAction => ({
  type: SET_ORDER_FAILED
})

export const removeOrder = (): ISetOrderRemove => ({
  type: SET_ORDER_REMOVE
})


export const setOrder = (payload: string[]) => (dispatch: AppDispatch) => {
  dispatch(setOrderAction());
  api
    .newOrder(payload)
    .then((res) => {
      if (res) {
        dispatch(setOrderSuccessAction(res));
      } else {
        dispatch(setOrderFailedAction());
      }
    })
    .catch((err) => {
      dispatch(setOrderFailedAction());
    });
};

// export type ISetOrderActions = {
//   readonly type: 
//     | typeof SET_ORDER
//     | typeof SET_ORDER_FAILED
//     | typeof SET_ORDER_REMOVE
//     | typeof SET_ORDER_SUCCES
// }

// export const removeOrder = () => ({
//   type: SET_ORDER_REMOVE,
// });

// export const setOrder = (payload: string[]) => (dispatch: AppDispatch) => {
//   dispatch({
//     type: SET_ORDER,
//   });
//   api
//     .newOrder(payload)
//     .then((res) => {
//       if (res) {
//         dispatch({
//           type: SET_ORDER_SUCCES,
//           ...res,
//         });
//       } else {
//         dispatch({
//           type: SET_ORDER_FAILED,
//         });
//       }
//     })
//     .catch((err) => {
//       dispatch({
//         type: SET_ORDER_FAILED,
//       });
//     });
// };

// export const removeOrder = () => ({
//   type: SET_ORDER_REMOVE,
// });
