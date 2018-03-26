import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import ActionTextButton from '../common/ActionTextButton';
import {GridContainer, GridRow, GridOneThirdColumn, GridTwoThirdColumn} from '../common/Grid';
import muiThemeable from 'material-ui/styles/muiThemeable';
import styled from 'styled-components';

const AuthPaper = styled(Paper)`
  position: absolute;
  float: right;
  width: 280px;
  right: 0;
  top: 56px;
  z-index: 10;
  padding: 10px 0px;
`;

const LastActionTextButton = muiThemeable()(styled(ActionTextButton)`
  & > button {
    color: ${props => props.muiTheme.palette.textIconColor} !important; // lesshint importantRule: false
  }
`);

const RightAlign = styled.div`
  text-align: right;
`;

const UserPopup = ({nickname, onClick}) => (
  <AuthPaper zDepth={2} rounded={false}>
    <GridContainer>
      <GridRow>
        <GridOneThirdColumn>
          <Avatar src='https://avatars2.githubusercontent.com/u/12692626?s=460&v=4' size='100' />
        </GridOneThirdColumn>
        <GridTwoThirdColumn>
          <RightAlign>
            {nickname}

            <LastActionTextButton label='Sign out' onClick={() => onClick()} />
          </RightAlign>
        </GridTwoThirdColumn>
      </GridRow>
    </GridContainer>
  </AuthPaper>
);

UserPopup.propTypes = {
  nickname: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default UserPopup;
