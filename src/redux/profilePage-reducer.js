import { stopSubmit } from 'redux-form';
import { profileAPI } from '../api/api';

// actions types
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const UPDATE_STATUS = 'profile/UPDATE-STATUS';
const ADD_NEW_POST = 'profile/ADD-NEW-POST';
const SET_PROFILE_PHOTO = 'profile/SET-PROFILE-PHOTO';
const SET_EDIT_MODE_PROFILE = 'profile/SET-EDIT-MODE-PROFILE';

// initial state
const initialState = {
	profile: null,
	postsData: [
		{ text: 'Hi!', id: 1, likeCount: 24 },
		{ text: 'Yo!', id: 2, likeCount: 32 },
		{ text: 'Olla!', id: 3, likeCount: 48 },
	],
	postTextareaValue: '',
	userStatus: '',
	editMode: false,
};

// reducers
const profilePageReducer = (state = initialState, action) => {
	switch (action.type) {
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
		case ADD_NEW_POST: {
			const newPost = {
				text: action.text,
				id: state.postsData.length + 1,
				likeCount: 0,
			};
			return {
				...state,
				postsData: [...state.postsData, newPost],
			};
		}
		case SET_PROFILE_PHOTO:
			return {
				...state,
				profile: {
					...state.profile,
					photos: {
						...state.profile.photos,
						small: action.photo,
						large: action.photo,
					},
				},
			};
		case SET_EDIT_MODE_PROFILE:
			return {
				...state,
				editMode: action.editMode,
			};
		default:
			return state;
	}
};

// actions creators
export const setUserProfileActionCreator = profile => ({
	type: SET_USER_PROFILE,
	profile,
});

export const setStatusActionCreator = status => ({
	type: SET_STATUS,
	status,
});

export const addNewPostActionCreator = text => ({
	type: ADD_NEW_POST,
	text,
});

export const setProfilePhotoActionCreator = photo => ({
	type: SET_PROFILE_PHOTO,
	photo,
});

export const setEditModeProfile = editMode => ({
	type: SET_EDIT_MODE_PROFILE,
	editMode,
});

// redux-thunks
export const getProfile = userId => async dispatch => {
	const data = await profileAPI.getProfile(userId);
	dispatch(setUserProfileActionCreator(data));
};

export const setUserStatus = userId => async dispatch => {
	const data = await profileAPI.getStatus(userId);
	dispatch(setStatusActionCreator(data));
};

export const updateUserStatus = status => async dispatch => {
	const data = await profileAPI.updateStatus(status);
	if (data.resultCode === 0) {
		dispatch(setStatusActionCreator(status));
	}
};

export const setProfilePhoto = photo => async dispatch => {
	const data = await profileAPI.updateProfilePhoto(photo);
	if (data.resultCode === 0) {
		dispatch(setProfilePhotoActionCreator(data.photos));
	}
};

export const setProfileData = profileData => async (dispatch, getState) => {
	const userId = getState().auth.id;
	const data = await profileAPI.updateProfileData(profileData);
	if (data.resultCode === 0) {
		dispatch(setEditModeProfile(false));
		dispatch(getProfile(userId));
	} else {
		const errorMessage = data.messages[0];
		dispatch(stopSubmit('profileData', { _error: errorMessage }));
	}
};

export default profilePageReducer;
