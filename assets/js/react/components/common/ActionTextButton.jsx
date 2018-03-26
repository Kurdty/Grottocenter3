import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import I18n from 'react-ghost-i18n';

const ActionTextButton = ({label, onClick, className}) => (
  <RaisedButton secondary={true} className={className} onTouchTap={() => onClick()}>
    <I18n>{label}</I18n>
  </RaisedButton>
);

ActionTextButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default ActionTextButton;
