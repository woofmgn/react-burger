import { auth } from "../../api/Auth";
import { userApi } from "../../api/UserData";
import {
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  SET_USER,
  SET_USER_FAILED,
  SET_USER_SUCCESS,
} from "../../utils/constants";
import { setCookie } from "../../utils/cookies";

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
      if (!err.success && err.message === "jwt expired") {
        auth
          .updateToken()
          .then((res) => {
            const jwt = res.accessToken.replace("Bearer", "");
            setCookie("token", jwt);
            setCookie("refreshToken", res.refreshToken);
          })
          .then(() => {
            userApi.getUserData().then((res) => {
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
            });
          });
      }
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
    .setUserData(newData)
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
