import DialogsMessagesItem from './DialogsMessagesItem/DialogsMessagesItem';
import React from 'react';
import {
	onChangeMessageActionCreator,
	sendNewMessageActionCreator,
} from '../../../redux/dialogsPage-reducer';

const DialogsMessages = props => {
	const renderDialogMessages = props.dialogsMessagesData.map(message => (
		<DialogsMessagesItem message={message.message} id={message.id} />
	));

	const sendMessageTextarea = React.createRef();

	const sendNewMessage = () => {
		props.dispatch(sendNewMessageActionCreator());
		props.dispatch(onChangeMessageActionCreator(''));
	};

	const onChangeMessage = () => {
		const sendMessageValue = sendMessageTextarea.current.value;
		props.dispatch(onChangeMessageActionCreator(sendMessageValue));
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
					Send
				</button>
			</div>
		</div>
	);
};

export default DialogsMessages;
