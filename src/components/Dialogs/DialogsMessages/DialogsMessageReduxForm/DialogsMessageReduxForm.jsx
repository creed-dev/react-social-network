import { Field, reduxForm } from 'redux-form';

const DialogsMessageForm = props => {
	return (
		<form onSubmit={props.handleSubmit} className="dialogs__send">
			<Field
				name="message"
				component="textarea"
				cols="60"
				rows="5"
				className="dialogs__send-text"
				placeholder="Enter the text"
				maxLength="140"
				type="text"
			/>
			<button className="dialogs__send-btn">Send</button>
		</form>
	);
};

export const DialogsMessageReduxForm = reduxForm({ form: 'sendMessage' })(
	DialogsMessageForm
);
