import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component="input"
				className="login__form-item"
				placeholder="Login"
				name="login"
			/>
			<Field
				component="input"
				className="login__form-item"
				placeholder="Password"
				name="password"
			/>
			<div className="login__form-item">
				<Field component="input" type="checkbox" name="rememberMe" />
				remember me
			</div>
			<button>Login</button>
		</form>
	);
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

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
