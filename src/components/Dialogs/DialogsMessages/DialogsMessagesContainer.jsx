import React from 'react';
import {
	onChangeMessageActionCreator,
	sendNewMessageActionCreator,
} from '../../../redux/dialogsPage-reducer';
import DialogsMessages from './DialogsMessages';

const DialogsMessagesContainer = props => {
	const state = props.store.getState().dialogsPage;

	const sendNewMessage = () => {
		props.store.dispatch(sendNewMessageActionCreator());
		props.store.dispatch(onChangeMessageActionCreator(''));
	};

	const onChangeMessage = sendMessageValue => {
		props.store.dispatch(onChangeMessageActionCreator(sendMessageValue));
	};

	return (
		<DialogsMessages
			sendNewMessage={sendNewMessage}
			onChangeMessage={onChangeMessage}
			dialogsMessagesData={state.dialogsMessagesData}
			dialogsSendMessageValue={state.dialogsSendMessageValue}
		/>
	);
};

export default DialogsMessagesContainer;
