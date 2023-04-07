import { TLoginUser, TNewUser, auth } from "../../api/Auth";
import { TNewUserData, userApi } from "../../api/UserData";
import {
  ADD_USER,
  ADD_USER_FAILED,
  ADD_USER_SUCCES,
  AUTH_CHECKED,
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  REMOVE_USER,
  SET_USER,
  SET_USER_FAILED,
  SET_USER_SUCCESS,
} from "../../utils/constants";
import { getCookie, setCookie } from "../../utils/cookies";
import { AppDispatch } from '../store';

export type TCurrentUser = {
  name: string;
  email: string;
}

type TResponseUser = {
  accessToken: string;
  refreshToken: string;
  success: boolean;
  user: TCurrentUser;
}

// interface IAddUserAction {
//   readonly type: 
//     | typeof ADD_USER
//     | typeof ADD_USER_FAILED;
// }

interface IAddUserAction {
  readonly type: typeof ADD_USER
}

interface IAddUserFailedAction {
  readonly type: typeof ADD_USER_FAILED
}

interface IAddUserSuccessAction {
  readonly type: typeof ADD_USER_SUCCES;
  user: TCurrentUser
}

interface IRemoveUserAction {
  readonly type: typeof REMOVE_USER;
}

// interface IGetUserAction {
//   readonly type: 
//     | typeof GET_USER
//     | typeof GET_USER_FAILED;
// }

interface IGetUserAction {
  readonly type: typeof GET_USER;
}

interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
}

interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  user: TCurrentUser
}

// interface ISetUserAction {
//   readonly type:
//     | typeof SET_USER
//     | typeof SET_USER_FAILED;
// }

interface ISetUserAction {
  readonly type: typeof SET_USER;
}

interface ISetUserFailedAction {
  readonly type: typeof SET_USER_FAILED
}

interface ISetUserSuccessAction {
  readonly type: typeof SET_USER_SUCCESS;
  user: TCurrentUser
}

interface IAuthUserAction {
  readonly type: typeof AUTH_CHECKED;
}

const addUserAction = (): IAddUserAction => ({
  type: ADD_USER
});

const addUserFailedAction = (): IAddUserFailedAction => ({
  type: ADD_USER_FAILED
});

const addUserSuccessAction = (user: TCurrentUser): IAddUserSuccessAction => ({
  type: ADD_USER_SUCCES,
  user: user
});

export const removeUser = (): IRemoveUserAction => ({
  type: REMOVE_USER,
});

const getUserAction = (): IGetUserAction => ({
  type: GET_USER,
});

const getUserFailedActions = (): IGetUserFailedAction => ({
  type: GET_USER_FAILED,
});

const getUserSuccessAction = (user: TCurrentUser): IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  user: user
});

const setUserAction = (): ISetUserAction => ({
  type: SET_USER,
});

const setUserFailedAction = (): ISetUserFailedAction => ({
  type: SET_USER_FAILED,
});

const setUserSuccessAction = (user: TCurrentUser): ISetUserSuccessAction => ({
  type: SET_USER_SUCCESS,
  user: user,
});

const authUserAction = ():IAuthUserAction => ({
  type: AUTH_CHECKED,
});

export type IUserActions = 
  | IAddUserAction
  | IAddUserFailedAction
  | IAddUserSuccessAction
  | IRemoveUserAction
  | IGetUserAction
  | IGetUserFailedAction
  | IGetUserSuccessAction
  | ISetUserAction
  | ISetUserFailedAction
  | ISetUserSuccessAction
  | IAuthUserAction;

  export const addUser = (data: TNewUser) => (dispatch: AppDispatch) => {
    dispatch(addUserAction());
    auth
      .registerUser(data)
      .then((res: TResponseUser) => {
        if (res && res.success) {
          const jwt = res.accessToken.replace("Bearer", "");

          dispatch(addUserSuccessAction(res.user));
          setCookie("token", jwt);
          setCookie("refreshToken", res.refreshToken);
        } else {
          dispatch(addUserFailedAction());
        }
      })
      .catch((err) => {
        dispatch(addUserFailedAction());
        console.log(err);
      });
  };
  
  export const loginUser = (data: TLoginUser) => (dispatch: AppDispatch) => {
    dispatch(addUserAction());
    auth
      .loginUser(data)
      .then((res: TResponseUser) => {
        if (res && res.success) {
          const jwt = res.accessToken.replace("Bearer", "");

          dispatch(addUserSuccessAction(res.user));
          setCookie("token", jwt);
          setCookie("refreshToken", res.refreshToken);
        } else {
          dispatch(addUserFailedAction());
        }
      })
      .catch((err) => {
        dispatch(addUserFailedAction());
        console.log(err);
      });
  };
  
  export const getUser = () => (dispatch: AppDispatch) => {
    dispatch(getUserAction());
    userApi
      .getUserData()
      .then((res: TResponseUser) => {
        if (res && res.success) {
          dispatch(getUserSuccessAction(res.user));
        } else {
          dispatch(getUserFailedActions());
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
                  dispatch(getUserSuccessAction(res.user));
                } else {
                  dispatch(getUserFailedActions());
                }
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
        dispatch(getUserFailedActions());
        console.log(err.message);
      });
  };
  
  export const setUser = (newData: TNewUserData) => (dispatch: AppDispatch) => {
    dispatch(setUserAction());
    userApi
      .setUserData(newData)
      .then((res: TResponseUser) => {
        if (res.success) {
          dispatch(setUserSuccessAction(res.user));
        } else {
          dispatch(setUserFailedAction());
        }
      })
      .catch((err) => {
        dispatch(setUserFailedAction());
        console.log(err);
      });
  };
  
  export const checkAuthUser = () => async (dispatch: AppDispatch) => {
    const jwtToken = getCookie("token");
    if (jwtToken) {
      // getUser();
      // @ts-ignore
      dispatch(getUser());
      dispatch(authUserAction());
    } else {
      dispatch(authUserAction());
    }
  };

  // export const addUser = (data: TNewUser) => (dispatch: AppDispatch) => {
  //   dispatch({
  //     type: ADD_USER,
  //   });
  //   auth
  //     .registerUser(data)
  //     .then((res: TResponseUser) => {
  //       if (res && res.success) {
  //         dispatch({
  //           type: ADD_USER_SUCCES,
  //           user: res.user,
  //         });
  //         const jwt = res.accessToken.replace("Bearer", "");
  //         setCookie("token", jwt);
  //         setCookie("refreshToken", res.refreshToken);
  //       } else {
  //         dispatch({
  //           type: ADD_USER_FAILED,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       dispatch({
  //         type: ADD_USER_FAILED,
  //       });
  //       console.log(err);
  //     });
  // };
  
  // export const loginUser = (data: TLoginUser) => (dispatch: AppDispatch) => {
  //   dispatch({
  //     type: ADD_USER,
  //   });
  //   auth
  //     .loginUser(data)
  //     .then((res: TResponseUser) => {
  //       if (res && res.success) {
  //         dispatch({
  //           type: ADD_USER_SUCCES,
  //           user: res.user,
  //         });
  //         const jwt = res.accessToken.replace("Bearer", "");
  //         setCookie("token", jwt);
  //         setCookie("refreshToken", res.refreshToken);
  //       } else {
  //         dispatch({
  //           type: ADD_USER_FAILED,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       dispatch({
  //         type: ADD_USER_FAILED,
  //       });
  //       console.log(err);
  //     });
  // };
  
  // export const removeUser = () => {
  //   return {
  //     type: REMOVE_USER,
  //   };
  // };
  
  // export const getUser = () => (dispatch: AppDispatch) => {
  //   dispatch({
  //     type: GET_USER,
  //   });
  //   userApi
  //     .getUserData()
  //     .then((res: TResponseUser) => {
  //       if (res && res.success) {
  //         dispatch({
  //           type: GET_USER_SUCCESS,
  //           user: res.user,
  //         });
  //       } else {
  //         dispatch({
  //           type: GET_USER_FAILED,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       if (!err.success && err.message === "jwt expired") {
  //         auth
  //           .updateToken()
  //           .then((res) => {
  //             const jwt = res.accessToken.replace("Bearer", "");
  //             setCookie("token", jwt);
  //             setCookie("refreshToken", res.refreshToken);
  //           })
  //           .then(() => {
  //             userApi.getUserData().then((res) => {
  //               if (res && res.success) {
  //                 dispatch({
  //                   type: GET_USER_SUCCESS,
  //                   user: res.user,
  //                 });
  //               } else {
  //                 dispatch({
  //                   type: GET_USER_FAILED,
  //                 });
  //               }
  //             });
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       }
  //       dispatch({
  //         type: GET_USER_FAILED,
  //       });
  //       console.log(err.message);
  //     });
  // };
  
  // export const setUser = (newData: TNewUserData) => (dispatch: AppDispatch) => {
  //   dispatch({
  //     type: SET_USER,
  //   });
  //   userApi
  //     .setUserData(newData)
  //     .then((res: TResponseUser) => {
  //       if (res.success) {
  //         dispatch({
  //           type: SET_USER_SUCCESS,
  //           user: res.user,
  //         });
  //       } else {
  //         dispatch({
  //           type: SET_USER_FAILED,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       dispatch({
  //         type: SET_USER_FAILED,
  //       });
  //       console.log(err);
  //     });
  // };
  
  // export const checkAuthUser = () => async (dispatch: AppDispatch) => {
  //   const jwtToken = getCookie("token");
  //   if (jwtToken) {
  //     dispatch(getUser());
  //     dispatch({
  //       type: AUTH_CHECKED,
  //     });
  //   } else {
  //     dispatch({
  //       type: AUTH_CHECKED,
  //     });
  //   }
  // };

// export const addUser = (data: TNewUser) => (dispatch: AppDispatch) => {
//   dispatch({
//     type: ADD_USER,
//   });
//   auth
//     .registerUser(data)
//     .then((res: TResponseUser) => {
//       if (res && res.success) {
//         dispatch({
//           type: ADD_USER_SUCCES,
//           user: res.user,
//         });
//         const jwt = res.accessToken.replace("Bearer", "");
//         setCookie("token", jwt);
//         setCookie("refreshToken", res.refreshToken);
//       } else {
//         dispatch({
//           type: ADD_USER_FAILED,
//         });
//       }
//     })
//     .catch((err) => {
//       dispatch({
//         type: ADD_USER_FAILED,
//       });
//       console.log(err);
//     });
// };

// export const loginUser = (data: TLoginUser) => (dispatch: AppDispatch) => {
//   dispatch({
//     type: ADD_USER,
//   });
//   auth
//     .loginUser(data)
//     .then((res: TResponseUser) => {
//       if (res && res.success) {
//         dispatch({
//           type: ADD_USER_SUCCES,
//           user: res.user,
//         });
//         const jwt = res.accessToken.replace("Bearer", "");
//         setCookie("token", jwt);
//         setCookie("refreshToken", res.refreshToken);
//       } else {
//         dispatch({
//           type: ADD_USER_FAILED,
//         });
//       }
//     })
//     .catch((err) => {
//       dispatch({
//         type: ADD_USER_FAILED,
//       });
//       console.log(err);
//     });
// };

// export const removeUser = () => {
//   return {
//     type: REMOVE_USER,
//   };
// };

// export const getUser = () => (dispatch: AppDispatch) => {
//   dispatch({
//     type: GET_USER,
//   });
//   userApi
//     .getUserData()
//     .then((res: TResponseUser) => {
//       if (res && res.success) {
//         dispatch({
//           type: GET_USER_SUCCESS,
//           user: res.user,
//         });
//       } else {
//         dispatch({
//           type: GET_USER_FAILED,
//         });
//       }
//     })
//     .catch((err) => {
//       if (!err.success && err.message === "jwt expired") {
//         auth
//           .updateToken()
//           .then((res) => {
//             const jwt = res.accessToken.replace("Bearer", "");
//             setCookie("token", jwt);
//             setCookie("refreshToken", res.refreshToken);
//           })
//           .then(() => {
//             userApi.getUserData().then((res) => {
//               if (res && res.success) {
//                 dispatch({
//                   type: GET_USER_SUCCESS,
//                   user: res.user,
//                 });
//               } else {
//                 dispatch({
//                   type: GET_USER_FAILED,
//                 });
//               }
//             });
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//       dispatch({
//         type: GET_USER_FAILED,
//       });
//       console.log(err.message);
//     });
// };

// export const setUser = (newData: TNewUserData) => (dispatch: AppDispatch) => {
//   dispatch({
//     type: SET_USER,
//   });
//   userApi
//     .setUserData(newData)
//     .then((res: TResponseUser) => {
//       if (res.success) {
//         dispatch({
//           type: SET_USER_SUCCESS,
//           user: res.user,
//         });
//       } else {
//         dispatch({
//           type: SET_USER_FAILED,
//         });
//       }
//     })
//     .catch((err) => {
//       dispatch({
//         type: SET_USER_FAILED,
//       });
//       console.log(err);
//     });
// };

// export const checkAuthUser = () => async (dispatch: AppDispatch) => {
//   const jwtToken = getCookie("token");
//   if (jwtToken) {
//     dispatch(getUser());
//     dispatch({
//       type: AUTH_CHECKED,
//     });
//   } else {
//     dispatch({
//       type: AUTH_CHECKED,
//     });
//   }
// };
