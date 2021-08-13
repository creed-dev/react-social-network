// actions types
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

// initial state
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

// reducers
const dialogsPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_NEW_MESSAGE: {
			const newMessage = {
				message: action.text,
				id: state.dialogsMessagesData.length + 1,
			};
			return {
				...state,
				dialogsMessagesData: [...state.dialogsMessagesData, newMessage],
			};
		}
		default:
			return state;
	}
};

// actions creators
export const sendNewMessageActionCreator = text => ({
	type: SEND_NEW_MESSAGE,
	text,
});

export default dialogsPageReducer;
