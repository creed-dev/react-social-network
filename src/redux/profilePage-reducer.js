import { profileAPI } from '../api/api';

const ADD_NEW_POST = 'ADD-NEW-POST';
const ON_NEW_POST_CHANGE = 'ON-NEW-POST-CHANGE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
	profile: null,
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
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
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

export const setUserProfileActionCreator = profile => ({
	type: SET_USER_PROFILE,
	profile,
});

export const getProfile = userId => {
	return dispatch => {
		if (!userId) {
			userId = 2;
		}
		profileAPI.getProfile(userId).then(data => {
			dispatch(setUserProfileActionCreator(data));
		});
	};
};

export default profilePageReducer;
