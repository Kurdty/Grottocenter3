import {
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT
} from './../actions/Authentication';

let defaultAuthenticationState = {
  user: undefined,
  token: undefined,
  roles: []
};

export const auth = (state = defaultAuthenticationState, action) => {
  switch (action.type) {
    case START_LOGIN:
    case LOGOUT:
      return defaultAuthenticationState;

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.loginInfos.token);
      return Object.assign({}, state, {
        token: action.loginInfos.token,
        user: action.loginInfos.user,
        roles: action.loginInfos.roles
      });

    case LOGIN_FAILED:
      return Object.assign({}, state, {
        errorMessage: action.error,
        displayError: true
      });

    default:
      return state;
  }
};
