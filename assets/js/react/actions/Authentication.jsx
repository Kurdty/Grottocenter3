export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const startLoginAction = (value) => {
  return {
    type: START_LOGIN,
    value: value
  };
};

export const loginSuccessAction = (loginInfos) => {
  return {
    type: LOGIN_SUCCESS,
    loginInfos: loginInfos
  };
};

export const loginFailedAction = (error) => {
  return {
    type: LOGIN_FAILED,
    error: error
  };
};
