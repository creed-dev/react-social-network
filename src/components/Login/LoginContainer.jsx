import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import Login from './Login';

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login: (email, password, rememberMe) => {
			dispatch(login(email, password, rememberMe));
		},
	};
};

const LoginContainer = props => {
	return <Login login={props.login} isAuth={props.isAuth} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
