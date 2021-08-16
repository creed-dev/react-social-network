import React from 'react';
import { Redirect } from 'react-router-dom';
import { LoginReduxForm } from './LoginReduxForm/LoginReduxForm';

const Login = props => {
	const onSubmit = formData => {
		props.login(
			formData.captcha,
			formData.email,
			formData.password,
			formData.rememberMe
		);
	};

	if (props.isAuth) return <Redirect to="/profile" />;

	return (
		<div>
			<h1>LOGIN FORM</h1>
			<LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
		</div>
	);
};

export default Login;
