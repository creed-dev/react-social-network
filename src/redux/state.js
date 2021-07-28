import { renderApp } from '../render';

const state = {
	profilePage: {
		postsData: [
			{ text: 'Hi!', id: 1, likeCount: 24 },
			{ text: 'Yo!', id: 2, likeCount: 32 },
			{ text: 'Olla!', id: 3, likeCount: 48 },
		],
	},
	dialogsPage: {
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
	},
};

export default state;

export const addNewPost = newPostText => {
	const newPost = {
		text: newPostText,
		id: state.profilePage.postsData.length + 1,
		likeCount: 0,
	};
	state.profilePage.postsData.push(newPost);
	renderApp(state);
};
