import React from 'react';
import { connect } from 'react-redux';
import {
	onChangeMessageActionCreator,
	sendNewMessageActionCreator,
} from '../../../redux/dialogsPage-reducer';
import DialogsMessages from './DialogsMessages';

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
