let store = {
	_callSubscriber() {},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	getState() {
		return this._state;
	},
	_state: {
		profilePage: {
			postsData: [
				{ text: 'Hi!', id: 1, likeCount: 24 },
				{ text: 'Yo!', id: 2, likeCount: 32 },
				{ text: 'Olla!', id: 3, likeCount: 48 },
			],
			postTextareaValue: '',
		},
		dialogsPage: {
			dialogsName: [
				{
					name: 'Pavel',
					id: 1,
					avatar:
						'https://cs3.livemaster.ru/zhurnalfoto/3/8/f/140723153856.jpg',
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
					avatar:
						'https://vraki.net/sites/default/files/inline/images/1_42.jpg',
				},
			],
			dialogsMessagesData: [
				{ message: 'Hey!', id: 1 },
				{ message: 'Hello!', id: 2 },
				{ message: 'Yo!', id: 3 },
				{ message: 'Olla!', id: 4 },
			],
			dialogsSendMessageValue: '',
		},
	},

	dispatch(action) {
		if (action.type === ADD_NEW_POST) {
			const newPost = {
				text: this._state.profilePage.postTextareaValue,
				id: this._state.profilePage.postsData.length + 1,
				likeCount: 0,
			};
			this._state.profilePage.postsData.push(newPost);
			this._callSubscriber(this._state);
		} else if (action.type === ON_NEW_POST_CHANGE) {
			this._state.profilePage.postTextareaValue = action.post;
			this._callSubscriber(this._state);
		} else if (action.type === SEND_NEW_MESSAGE) {
			const newMessage = {
				message: this._state.dialogsPage.dialogsSendMessageValue,
				id: this._state.dialogsPage.dialogsMessagesData.length + 1,
			};
			this._state.dialogsPage.dialogsMessagesData.push(newMessage);
			this._callSubscriber(this._state);
		} else if (action.type === ON_CHANGE_MESSAGE) {
			this._state.dialogsPage.dialogsSendMessageValue = action.message;
			this._callSubscriber(this._state);
		}
	},
};

const ADD_NEW_POST = 'ADD-NEW-POST';
const ON_NEW_POST_CHANGE = 'ON-NEW-POST-CHANGE';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const ON_CHANGE_MESSAGE = 'ON-CHANGE-MESSAGE';

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST });

export const onNewPostChangeActionCreator = newPostText => ({
	type: ON_NEW_POST_CHANGE,
	post: newPostText,
});

export const sendNewMessageActionCreator = () => ({ type: SEND_NEW_MESSAGE });

export const onChangeMessageActionCreator = sendMessageValue => ({
	type: ON_CHANGE_MESSAGE,
	message: sendMessageValue,
});

export default store;
