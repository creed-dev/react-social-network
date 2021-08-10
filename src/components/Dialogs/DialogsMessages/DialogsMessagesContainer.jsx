import React from 'react';
import { connect } from 'react-redux';
import { sendNewMessageActionCreator } from '../../../redux/dialogsPage-reducer';
import DialogsMessages from './DialogsMessages';

const mapStateToProps = state => {
	return {
		dialogsMessagesData: state.dialogsPage.dialogsMessagesData,
		isAuth: state.auth.isAuth,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		sendNewMessage2: text => {
			dispatch(sendNewMessageActionCreator(text));
		},
	};
};

const DialogsMessagesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DialogsMessages);

export default DialogsMessagesContainer;
