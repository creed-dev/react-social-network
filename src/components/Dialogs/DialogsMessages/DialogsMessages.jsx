import DialogsMessagesItem from './DialogsMessagesItem/DialogsMessagesItem';
import React from 'react';
import { DialogsMessageReduxForm } from './DialogsMessageReduxForm/DialogsMessageReduxForm';

const DialogsMessages = props => {
	const renderDialogMessages = props.dialogsMessagesData.map(message => (
		<DialogsMessagesItem message={message.message} id={message.id} />
	));

	const onSubmit = formData => {
		props.sendNewMessage2(formData.message);
	};

	return (
		<div className="dialogs__messages">
			{renderDialogMessages}
			<DialogsMessageReduxForm onSubmit={onSubmit} />
		</div>
	);
};

export default DialogsMessages;
