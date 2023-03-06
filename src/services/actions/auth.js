import { auth } from "../../api/Auth";
import {
  ADD_USER,
  ADD_USER_FAILED,
  ADD_USER_SUCCES,
} from "../../utils/constants";

export const addUser = (data) => (dispatch) => {
  dispatch({
    type: ADD_USER,
  });
  auth
    .registerUser(data)
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: ADD_USER_SUCCES,
          user: res.user,
        });
      } else {
        dispatch({
          type: ADD_USER_FAILED,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: ADD_USER_FAILED,
      });
      console.log(err);
    });
};

export const loginUser = (data) => (dispatch) => {
  dispatch({
    type: ADD_USER,
  });
  auth
    .loginUser(data)
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: ADD_USER_SUCCES,
          user: res.user,
        });
      } else {
        dispatch({
          type: ADD_USER_FAILED,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: ADD_USER_FAILED,
      });
      console.log(err);
    });
};
