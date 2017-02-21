import { START_LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from './../actions/Authentication';

let defaultAuthenticationState = {
  user: {
    name: 'Guest',
    lastLoginDate: ''
  },
  token: '',
  roles: ['VIEW']
};

export const auth = (state = defaultAuthenticationState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return state;

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        token: action.loginInfos.token,
        user: action.loginInfos.user
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
