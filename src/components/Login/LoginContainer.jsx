import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import Login from './Login';

const LoginContainer = props => {
	return (
		<Login
			captchaUrl={props.captchaUrl}
			login={props.login}
			isAuth={props.isAuth}
		/>
	);
};

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		captchaUrl: state.auth.captchaUrl,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login: (email, password, rememberMe) => {
			dispatch(login(email, password, rememberMe));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
