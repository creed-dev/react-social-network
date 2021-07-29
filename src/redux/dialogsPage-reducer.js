const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const ON_CHANGE_MESSAGE = 'ON-CHANGE-MESSAGE';

const dialogsPageReducer = (state, action) => {
	switch (action.type) {
		case SEND_NEW_MESSAGE:
			const newMessage = {
				message: state.dialogsSendMessageValue,
				id: state.dialogsMessagesData.length + 1,
			};
			state.dialogsMessagesData.push(newMessage);
			return state;
		case ON_CHANGE_MESSAGE:
			state.dialogsSendMessageValue = action.message;
			return state;
		default:
			return state;
	}
};

export const sendNewMessageActionCreator = () => ({ type: SEND_NEW_MESSAGE });

export const onChangeMessageActionCreator = sendMessageValue => ({
	type: ON_CHANGE_MESSAGE,
	message: sendMessageValue,
});

export default dialogsPageReducer;
