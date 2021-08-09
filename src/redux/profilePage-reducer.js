import { profileAPI } from '../api/api';

const ADD_NEW_POST = 'ADD-NEW-POST';
const ON_NEW_POST_CHANGE = 'ON-NEW-POST-CHANGE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const UPDATE_STATUS = 'UPDATE-STATUS';

const initialState = {
	profile: null,
	postsData: [
		{ text: 'Hi!', id: 1, likeCount: 24 },
		{ text: 'Yo!', id: 2, likeCount: 32 },
		{ text: 'Olla!', id: 3, likeCount: 48 },
	],
	postTextareaValue: '',
	userStatus: '',
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
		case SET_STATUS:
			return {
				...state,
				userStatus: action.status,
			};
		case UPDATE_STATUS:
			return {
				...state,
				userStatus: action.status,
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

export const setStatusActionCreator = status => ({
	type: SET_STATUS,
	status,
});

export const getProfile = userId => dispatch => {
	profileAPI.getProfile(userId).then(data => {
		dispatch(setUserProfileActionCreator(data));
	});
};

export const setUserStatus = userId => dispatch => {
	profileAPI.getStatus(userId).then(data => {
		dispatch(setStatusActionCreator(data));
	});
};

export const updateUserStatus = status => dispatch => {
	profileAPI.updateStatus(status).then(data => {
		if (data.resultCode === 0) {
			dispatch(setStatusActionCreator(status));
		}
	});
};

export default profilePageReducer;
