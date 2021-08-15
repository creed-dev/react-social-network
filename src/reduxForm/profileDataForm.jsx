import { Field, reduxForm } from 'redux-form';
import { InputLogin } from './FormComponents/FormComponents';
import { required } from './validators';

const ProfileStandartForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<button>Save</button>
			{props.error && (
				<div className="validate__login_invalid-data">{props.error}</div>
			)}
			<Field
				component={InputLogin}
				className="login__form-item"
				placeholder="Full name"
				name="fullName"
				validate={[required]}
			/>
			<Field
				component={InputLogin}
				className="login__form-item"
				placeholder="About me"
				name="aboutMe"
				validate={[required]}
			/>
			<div className="login__form-item">
				Looking for a job:
				<Field component="Input" type="checkbox" name="lookingForAJob" />
			</div>
			<Field
				component={InputLogin}
				className="login__form-item"
				placeholder="Desciption"
				name="lookingForAJobDescription"
				validate={[required]}
			/>
			<div>
				<b>Contacts:</b>
			</div>
			<Field
				component={InputLogin}
				className="login__form-item"
				placeholder="Facebook"
				name="contacts.facebook"
			/>
			<Field
				component={InputLogin}
				className="login__form-item"
				placeholder="Instagram"
				name="contacts.instagram"
			/>
			<Field
				component={InputLogin}
				className="login__form-item"
				placeholder="Github"
				name="contacts.github"
			/>
		</form>
	);
};

export const ProfileDataForm = reduxForm({ form: 'profileData' })(
	ProfileStandartForm
);
