import React from 'react';
import { LoginReduxForm } from './LoginReduxForm/LoginReduxForm';

const Login = props => {
	const onSubmit = formData => {
		console.log(formData);
	};

	return (
		<div>
			<h1>LOGIN FORM</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

export default Login;
