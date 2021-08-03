const ADD_NEW_POST = 'ADD-NEW-POST';
const ON_NEW_POST_CHANGE = 'ON-NEW-POST-CHANGE';

const initialState = {
	postsData: [
		{ text: 'Hi!', id: 1, likeCount: 24 },
		{ text: 'Yo!', id: 2, likeCount: 32 },
		{ text: 'Olla!', id: 3, likeCount: 48 },
	],
	postTextareaValue: '',
};

const profilePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_POST: {
			const newPost = {
				text: state.postTextareaValue,
				id: state.postsData.length + 1,
				likeCount: 0,
			};
			return {
				...state,
				postsData: [...state.postsData, newPost],
			};
		}
		case ON_NEW_POST_CHANGE:
			return {
				...state,
				postTextareaValue: action.post,
			};
		default:
			return state;
	}
};

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST });

export const onNewPostChangeActionCreator = newPostText => ({
	type: ON_NEW_POST_CHANGE,
	post: newPostText,
});

export default profilePageReducer;
