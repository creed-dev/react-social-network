import React from 'react';
import { connect } from 'react-redux';
import {
	onChangeMessageActionCreator,
	sendNewMessageActionCreator,
} from '../../../redux/dialogsPage-reducer';
import DialogsMessages from './DialogsMessages';

// const DialogsMessagesContainer = props => {
// 	const state = props.store.getState().dialogsPage;

// 	const sendNewMessage = () => {
// 		props.store.dispatch(sendNewMessageActionCreator());
// 		props.store.dispatch(onChangeMessageActionCreator(''));
// 	};

// 	const onChangeMessage = sendMessageValue => {
// 		props.store.dispatch(onChangeMessageActionCreator(sendMessageValue));
// 	};

// 	return (
// 		<DialogsMessages
// 			sendNewMessage={sendNewMessage}
// 			onChangeMessage={onChangeMessage}
// 			dialogsMessagesData={state.dialogsMessagesData}
// 			dialogsSendMessageValue={state.dialogsSendMessageValue}
// 		/>
// 	);
// };

const mapStateToProps = state => {
	return {
		dialogsMessagesData: state.dialogsPage.dialogsMessagesData,
		dialogsSendMessageValue: state.dialogsPage.dialogsSendMessageValue,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		sendNewMessage: () => {
			dispatch(sendNewMessageActionCreator());
			dispatch(onChangeMessageActionCreator(''));
		},
		onChangeMessage: sendMessageValue => {
			dispatch(onChangeMessageActionCreator(sendMessageValue));
		},
	};
};

const DialogsMessagesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DialogsMessages);

export default DialogsMessagesContainer;
