import React, {PropTypes} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import LanguagePicker from '../../containers/LanguagePicker';
import AuthenticationConnector from '../../containers/AuthenticationConnector';

const GrottoAppBar = (props) =>(
  <Toolbar style={{backgroundColor: props.muiTheme.palette.primary1Color}} className="gcAppBar">
    <ToolbarGroup firstChild={true}>
      <FontIcon className="material-icons" style={{color: props.muiTheme.palette.textIconColor}}>language</FontIcon>
      <LanguagePicker/>
    </ToolbarGroup>

    <ToolbarGroup>
      <AuthenticationConnector />
    </ToolbarGroup>
  </Toolbar>
);

GrottoAppBar.propTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default muiThemeable()(GrottoAppBar);
