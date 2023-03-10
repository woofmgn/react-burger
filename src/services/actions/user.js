import { auth } from "../../api/Auth";
import { userApi } from "../../api/UserData";
import {
  ADD_USER,
  ADD_USER_FAILED,
  ADD_USER_SUCCES,
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  REMOVE_USER,
  SET_USER,
  SET_USER_FAILED,
  SET_USER_SUCCESS,
} from "../../utils/constants";
import { setCookie } from "../../utils/cookies";

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
        const jwt = res.accessToken.replace("Bearer", "");
        setCookie("token", jwt);
        setCookie("refreshToken", res.refreshToken);
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
        const jwt = res.accessToken.replace("Bearer", "");
        setCookie("token", jwt);
        setCookie("refreshToken", res.refreshToken);
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

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const getUser = () => (dispatch) => {
  dispatch({
    type: GET_USER,
  });
  userApi
    .getUserData()
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
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
              if (res && res.success) {
                dispatch({
                  type: GET_USER_SUCCESS,
                  user: res.user,
                });
              } else {
                dispatch({
                  type: GET_USER_FAILED,
                });
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
      dispatch({
        type: GET_USER_FAILED,
      });
      console.log(err.message);
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
