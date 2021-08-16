import { Field, reduxForm } from 'redux-form';
import { InputLogin } from '../../../reduxForm/FormComponents/FormComponents';
import { required } from '../../../reduxForm/validators';

const LoginForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component={InputLogin}
				className="login__form-item"
				placeholder="Email"
				name="email"
				validate={[required]}
			/>
			<Field
				component={InputLogin}
				className="login__form-item"
				placeholder="Password"
				name="password"
				validate={[required]}
				type="password"
			/>
			{props.error && (
				<div className="validate__login_invalid-data">{props.error}</div>
			)}
			<div className="login__form-item">
				<Field component="Input" type="checkbox" name="rememberMe" />
				remember me
			</div>

			{props.captchaUrl && <img src={props.captchaUrl}></img>}
			{props.captchaUrl && (
				<Field
					component={InputLogin}
					className="login__form-item"
					placeholder="Symbols from image"
					name="captcha"
					validate={[required]}
				/>
			)}
			<button>Login</button>
		</form>
	);
};

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);
