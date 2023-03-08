import { userApi } from "../../api/UserData";
import {
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  SET_USER,
  SET_USER_FAILED,
  SET_USER_SUCCESS,
} from "../../utils/constants";

export const getUser = () => (dispatch) => {
  dispatch({
    type: GET_USER,
  });
  userApi
    .getUserData()
    .then((res) => {
      if (res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          success: res.success,
          user: res.user,
        });
      } else {
        dispatch({
          type: GET_USER_FAILED,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_USER_FAILED,
      });
      console.log(err);
    });
};

export const setUser = (newData) => (dispatch) => {
  dispatch({
    type: SET_USER,
  });
  userApi
    .getUserData(newData)
    .then((res) => {
      if (res.success) {
        dispatch({
          type: SET_USER_SUCCESS,
          success: res.success,
          user: res.user,
        });
      } else {
        dispatch({
          type: SET_USER_FAILED,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: SET_USER_FAILED,
      });
      console.log(err);
    });
};
