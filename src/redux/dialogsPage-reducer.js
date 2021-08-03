const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const ON_CHANGE_MESSAGE = 'ON-CHANGE-MESSAGE';

const initialState = {
	dialogsName: [
		{
			name: 'Pavel',
			id: 1,
			avatar: 'https://cs3.livemaster.ru/zhurnalfoto/3/8/f/140723153856.jpg',
		},
		{
			name: 'Alexey',
			id: 2,
			avatar:
				'https://shutniki.club/wp-content/uploads/2020/01/Multyashnye_kartinki_s_devushkami__dlya_profilya_3_27181708.jpg',
		},
		{
			name: 'Artem',
			id: 3,
			avatar:
				'https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04-1.jpg',
		},
		{
			name: 'Denis',
			id: 4,
			avatar: 'https://vraki.net/sites/default/files/inline/images/1_42.jpg',
		},
	],
	dialogsMessagesData: [
		{ message: 'Hey!', id: 1 },
		{ message: 'Hello!', id: 2 },
		{ message: 'Yo!', id: 3 },
		{ message: 'Olla!', id: 4 },
	],
	dialogsSendMessageValue: '',
};

const dialogsPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_NEW_MESSAGE: {
			const newMessage = {
				message: state.dialogsSendMessageValue,
				id: state.dialogsMessagesData.length + 1,
			};
			return {
				...state,
				dialogsMessagesData: [...state.dialogsMessagesData, newMessage],
			};
		}
		case ON_CHANGE_MESSAGE:
			return {
				...state,
				dialogsSendMessageValue: action.message,
			};
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
