import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import Dialog from 'material-ui/Dialog';
import muiThemeable from 'material-ui/styles/muiThemeable';
import LanguagePicker from './../../components/LanguagePicker';
import SigninForm from './../../components/SigninForm';
import SignupForm from './../../components/SignupForm';
import I18n from 'react-ghost-i18n';
import fetch from 'isomorphic-fetch';
import {startLoginAction, loginSuccessAction, loginFailedAction} from '../../actions/Authentication';

class GrottoAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSignIn: false,
      openRegister: false,
      contact: '',
      password: ''
    };
    this.closeSignInDialog = this.closeSignInDialog.bind(this);
    this.openSignInDialog = this.openSignInDialog.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.processLogin = this.processLogin.bind(this);
  }

  openSignInDialog(event, index, value) { // eslint-disable-line no-unused-vars
    this.setState({
      openSignIn: true
    });
  }

  processLogin(event, index, value) { // eslint-disable-line no-unused-vars
    let _this = this;

    this.props.dispatch(startLoginAction(''));

    fetch('/csrfToken', {
      method: 'get',
      credentials: 'include',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(function(response) {
      if (response.status >= 400) {
        _this.props.dispatch(loginFailedAction(response));
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then(function(token) {
      let dataJson = {
        contact: _this.state.contact,
        password: _this.state.password,
        _csrf: token._csrf
      };

      fetch('/auth/login', {
        method: 'post',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataJson)
      })
      .then(function(response) {
        if (response.status >= 400) {
          _this.props.dispatch(loginFailedAction(response));
          throw new Error('Bad response from server');
        }
        return response.json();
      }).then(function(results) {
        _this.props.dispatch(loginSuccessAction(results));
        _this.closeSignInDialog();
      });
    });
  }

  closeSignInDialog(event, index, value) { // eslint-disable-line no-unused-vars
    this.setState({
      openSignIn: false
    });
  }

  handleContact(event) {
    this.setState({
      contact: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  openRegisterDialog(event, index, value) { // eslint-disable-line no-unused-vars
    this.setState({
      openRegister: true
    });
  }

  closeRegisterDialog(event, index, value) { // eslint-disable-line no-unused-vars
    this.setState({
      openRegister: false
    });
  }

  render() {
    const actionsSignIn = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.closeSignInDialog}
        style={{marginRight: '10px'}}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.processLogin}
      />,
    ];

    const actionsRegister = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.closeRegisterDialog.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.closeRegisterDialog.bind(this)}
      />,
    ];

    return (
      <Toolbar style={{backgroundColor: this.props.muiTheme.palette.primary1Color}} className="gcAppBar">
        <ToolbarGroup firstChild={true}>
          <FontIcon className="material-icons" style={{color: this.props.muiTheme.palette.textIconColor}}>language</FontIcon>
          <LanguagePicker/>
        </ToolbarGroup>

        <ToolbarGroup>
          <div className='notOnMobile'>
            <I18n><RaisedButton
              label="Sign in"
              style={{color: this.props.muiTheme.palette.textIconColor, marginRight: '10px'}}
              secondary={true}
              onTouchTap={this.openSignInDialog}
            /></I18n>
            <I18n><RaisedButton
              label="Register"
              style={{color: this.props.muiTheme.palette.textIconColor}}
              secondary={true}
              onTouchTap={this.openRegisterDialog.bind(this)}
            /></I18n>
          </div>
          <div className='onlyMobile'>
            <IconMenu iconButtonElement={
              <IconButton iconStyle={{color: this.props.muiTheme.palette.textIconColor}} touch={true}>
                <MoreVertIcon />
              </IconButton>
            }>
              <I18n><MenuItem primaryText="Sign In" onTouchTap={this.openSignInDialog}/></I18n>
              <I18n><MenuItem primaryText="Register" onTouchTap={this.openRegisterDialog.bind(this)}/></I18n>
            </IconMenu>
          </div>
        </ToolbarGroup>

        <Dialog
          title="SignIn Form"
          actions={actionsSignIn}
          modal={false}
          open={this.state.openSignIn}
          onRequestClose={this.closeSignInDialog}
          autoScrollBodyContent={true}
        >
          <SigninForm
            contact={this.state.contact}
            handleContact={this.handleContact}
            password={this.password}
            handlePassword={this.handlePassword}
          />
        </Dialog>

        <Dialog
          title="Register Form"
          actions={actionsRegister}
          modal={false}
          open={this.state.openRegister}
          onRequestClose={this.closeRegisterDialog.bind(this)}
        >
          TODO: register form
          <SignupForm/>
        </Dialog>
      </Toolbar>
    );
  }
}

GrottoAppBar.propTypes = {
  muiTheme: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

GrottoAppBar = connect()(GrottoAppBar); // eslint-disable-line no-class-assign

export default muiThemeable()(GrottoAppBar);
