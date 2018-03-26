/**
 * TODO Add comment
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './conf/Routes';
import I18n from 'react-ghost-i18n';

import grottoTheme from './conf/grottoTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import GCReducer from './reducers/GCReducer';

import {changeLanguage} from './actions/Language';
import TextDirectionProvider from './containers/TextDirectionProvider';

import {processLogin, refreshToken} from './actions/Authentication';
import {GUEST_LOGIN, GUEST_EMAIL} from './conf/Config';

// Needed for onTouchTap// sans ça les clicks de material-ui ne fonctionnent pas
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

let gcStore = createStore(
  GCReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

/*
  * please do not remove *
  localization init via ejs printed global var catalog
*/
I18n.locale = window.catalog;

gcStore.subscribe(function() {
  console.log(gcStore.getState());
});

gcStore.dispatch(changeLanguage(locale)); //eslint-disable-line no-undef

// Local storage used to prevent user to be unlogged by F5
if (!localStorage.getItem('token')) {
  //TODO also add control token validity
  gcStore.dispatch(processLogin(GUEST_LOGIN, GUEST_EMAIL));
} else {
  gcStore.dispatch(refreshToken());
  //TODO if response is 401, show a message then process a guest login
}

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(grottoTheme)}>
    <Provider store={gcStore}>
      <TextDirectionProvider>
        <Router routes={routes} history={browserHistory} />
      </TextDirectionProvider>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('gc3_content_wrapper')
);
