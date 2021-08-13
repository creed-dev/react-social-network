import React from 'react';
import { connect } from 'react-redux';
import { sendNewMessageActionCreator } from '../../../redux/dialogsPage-reducer';
import DialogsMessages from './DialogsMessages';

const DialogsMessagesContainer = props => {
	return (
		<DialogsMessages
			dialogsMessagesData={props.dialogsMessagesData}
			isAuth={props.isAuth}
			sendNewMessage={props.sendNewMessage}
		/>
	);
};

const mapStateToProps = state => {
	return {
		dialogsMessagesData: state.dialogsPage.dialogsMessagesData,
		isAuth: state.auth.isAuth,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		sendNewMessage: text => {
			dispatch(sendNewMessageActionCreator(text));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DialogsMessagesContainer);
