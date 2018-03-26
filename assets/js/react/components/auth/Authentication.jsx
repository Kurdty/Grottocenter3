import React, {Component, PropTypes} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import muiThemeable from 'material-ui/styles/muiThemeable';
import SigninForm from './SignInForm';
import SignupForm from './SignUpForm';
import I18n from 'react-ghost-i18n';
import {ShowDivOnTablet, HideDivOnTablet} from '../common/ResponsiveComponents';
import ActionTextButton from '../common/ActionTextButton';
import UserPopup from './UserPopup';
import styled from 'styled-components';

const FirstActionTextButton = muiThemeable()(styled(ActionTextButton)`
  & > button {
    color: ${props => props.muiTheme.palette.textIconColor} !important; // lesshint importantRule: false
  }
  margin-right: 10px;
`);

const LastActionTextButton = muiThemeable()(styled(ActionTextButton)`
  & > button {
    color: ${props => props.muiTheme.palette.textIconColor} !important; // lesshint importantRule: false
  }
`);

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSignIn: false,
      openSignUp: false,
      contact: '',
      password: ''
    };
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

  openSignUpDialog() {
    this.setState({
      openSignUp: true
    });
  }

  closeSignUpDialog() {
    this.setState({
      openSignUp: false
    });
  }

  openSignInDialog() {
    this.setState({
      openSignIn: true
    });
  }

  closeSignInDialog() {
    this.setState({
      openSignIn: false
    });
  }

  render() {
    const actionsSignIn = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.closeSignInDialog()}
        style={{marginRight: '10px'}}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={false}
        onTouchTap={() => {
          this.props.processLogin(this.state.contact, this.state.password);
          this.closeSignInDialog();
        }}
      />,
    ];

    const actionsSignUp = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.closeSignUpDialog()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={false}
        onTouchTap={() => this.closeSignUpDialog()}
      />,
    ];

    let authenticated = (this.props.token && this.props.user && this.props.user.login !== 'guest');

    return (
      <div>
        {!authenticated &&
          <HideDivOnTablet>
            <FirstActionTextButton
              label='Sign in'
              onClick={() => this.openSignInDialog()} />
            <LastActionTextButton
              label='Sign up'
              onClick={() => this.openSignUpDialog()} />
          </HideDivOnTablet>
        }
        {authenticated &&
          <HideDivOnTablet>
            <IconButton
              iconStyle={{color: this.props.muiTheme.palette.textIconColor}}
              touch={true}
              onClick={() => this.openSignUpDialog()}>
              <MoreVertIcon />
            </IconButton>
            <UserPopup
              nickname={this.props.user.nickname}
              onClick={() => this.openSignUpDialog()}/>
          </HideDivOnTablet>
        }

        <ShowDivOnTablet>
          <IconMenu iconButtonElement={
            <IconButton iconStyle={{color: this.props.muiTheme.palette.textIconColor}} touch={true}>
              <MoreVertIcon />
            </IconButton>
          }
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            {!authenticated &&
              <I18n><MenuItem primaryText="Sign in" onTouchTap={() => this.openSignInDialog()}/>
              <MenuItem primaryText="Sign up" onTouchTap={() => this.openSignUpDialog()}/></I18n>
            }
            {authenticated &&
              <I18n><MenuItem primaryText="Parameters" onTouchTap={() => this.openSignInDialog()}/>
              <MenuItem primaryText="Sign out" onTouchTap={() => this.openSignInDialog()}/></I18n>
            }
          </IconMenu>
        </ShowDivOnTablet>

        <Dialog
          title="SignIn Form"
          actions={actionsSignIn}
          modal={false}
          open={this.state.openSignIn}
          onRequestClose={() => this.closeSignInDialog()}
          autoScrollBodyContent={true}>
          <SigninForm
            contact={this.state.contact}
            handleContact={(event) => this.handleContact(event)}
            password={this.state.password}
            handlePassword={(event) => this.handlePassword(event)}
            />
        </Dialog>

        <Dialog
          title="SignUp Form"
          actions={actionsSignUp}
          modal={false}
          open={this.state.openSignUp}
          onRequestClose={() => this.closeSignUpDialog()}
        >
          TODO: register form
          <SignupForm/>
        </Dialog>

        <Dialog
          title="User"
          actions={actionsSignUp}
          modal={false}
          open={this.state.openSignUp}
          onRequestClose={() => this.closeSignUpDialog()}
        >
          TODO: register form
          <SignupForm/>
        </Dialog>
      </div>
    );
  }
}

Authentication.propTypes = {
  muiTheme: PropTypes.object.isRequired,
  processLogin: PropTypes.func.isRequired,
  token: PropTypes.string,
  user: PropTypes.object
};

export default muiThemeable()(Authentication);
