import DialogsMessagesItem from './DialogsMessagesItem/DialogsMessagesItem';
import React from 'react';

const DialogsMessages = props => {
	const renderDialogMessages = props.dialogsMessagesData.map(message => (
		<DialogsMessagesItem message={message.message} id={message.id} />
	));

	const sendMessageTextarea = React.createRef();

	const sendNewMessage = () => {
		props.sendNewMessage();
		props.onChangeMessage('');
	};

	const onChangeMessage = () => {
		const sendMessageValue = sendMessageTextarea.current.value;
		props.onChangeMessage(sendMessageValue);
	};

	return (
		<div className="dialogs__messages">
			{renderDialogMessages}
			<div className="dialogs__send">
				<textarea
					cols="60"
					rows="5"
					className="dialogs__send-text"
					placeholder="Enter the text"
					maxLength="140"
					ref={sendMessageTextarea}
					value={props.dialogsSendMessageValue}
					onChange={onChangeMessage}
				/>
				<button className="dialogs__send-btn" onClick={sendNewMessage}>
					Add post
				</button>
			</div>
		</div>
	);
};

export default DialogsMessages;
