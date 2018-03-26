import {connect} from 'react-redux';
import {processLogin} from './../actions/Authentication';
import Authentication from '../components/auth/Authentication';

const mapDispatchToProps = (dispatch) => {
  return {
    processLogin: (login, password) => dispatch(processLogin(login, password))
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    token: state.auth.token,
    roles: state.auth.roles,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
