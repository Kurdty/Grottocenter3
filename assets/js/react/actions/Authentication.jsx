import {loginUrl, refreshTokenUrl} from '../conf/Config';
import {get, post} from '../conf/API';

export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

export const startLoginAction = () => {
  return {
    type: START_LOGIN
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const loginSuccessAction = (loginInfos) => {
  return {
    type: LOGIN_SUCCESS,
    loginInfos
  };
};

export const loginFailedAction = (error) => {
  return {
    type: LOGIN_FAILED,
    error: error
  };
};

export function processLogin(login, password) {
  return function (dispatch) {
    dispatch(startLoginAction());

    return post(loginUrl,
      undefined,
      {
        contact: login,
        password
      },
      (userData) => dispatch(loginSuccessAction(JSON.parse(userData))),
      (error) => dispatch(loginFailedAction(error))
    );
  };
}

export function refreshToken() {
  return function (dispatch) {
    return get(refreshTokenUrl,
      undefined,
      (userData) => dispatch(loginSuccessAction(JSON.parse(userData))),
      (error) => dispatch(loginFailedAction(error))
    );
  };
}
