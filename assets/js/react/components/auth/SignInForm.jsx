/**
 * TODO Add comment
 */
import React, {PropTypes} from 'react';
import I18n from 'react-ghost-i18n';

const SigninForm = ({contact, handleContact, password, handlePassword}) => (
  <div>
    <div className="loginForm">
      <div className="form-group">
        <label htmlFor="contact"><I18n>Email</I18n></label>
        <input className="form-control" type="email" name="contact" id="contact" placeholder="Email" value={contact} onChange={handleContact}/>
      </div>
      <div className="form-group">
        <label htmlFor="password"><I18n>Password</I18n></label>
        <input className="form-control" type="password" name="password" id="password" placeholder="Password" value={password} onChange={handlePassword}/>
      </div>
    </div>
  </div>
);

SigninForm.propTypes = {
  contact: PropTypes.string.isRequired,
  handleContact: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  handlePassword: PropTypes.func.isRequired
};

export default SigninForm;
