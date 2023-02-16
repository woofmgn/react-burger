import { api } from "../../api/Api";
import {
  SET_ORDER,
  SET_ORDER_FAILED,
  SET_ORDER_SUCCES,
} from "../../utils/constants";

export const setOrder = (payload) => {
  return function (dispatch) {
    dispatch({
      type: SET_ORDER,
    });
    api
      .newOrder(payload)
      .then((res) => {
        if (res) {
          console.log(res.name);
          dispatch({
            type: SET_ORDER_SUCCES,
            ...res,
          });
        } else {
          dispatch({
            type: SET_ORDER_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: SET_ORDER_FAILED,
        });
      });
  };
};
