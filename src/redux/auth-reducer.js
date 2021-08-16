import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

// actions types
const SET_USER_AUTH = 'auth/SET-USER-AUTH';
const SET_CAPTCHA_URL = 'auth/GET-CAPTCHA-URL';

// initial state
const initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	captchaUrl: null,
};

// reducers
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_AUTH:
			return {
				...state,
				...action.data,
			};
		case SET_CAPTCHA_URL:
			return {
				...state,
				captchaUrl: action.captchaUrl,
			};
		default:
			return state;
	}
};

// actions creators
export const setUserAuthActionCreator = (id, login, email, isAuth) => ({
	type: SET_USER_AUTH,
	data: {
		id,
		login,
		email,
		isAuth,
	},
});

export const setCaptchaUrlActionCreator = captchaUrl => ({
	type: SET_CAPTCHA_URL,
	captchaUrl,
});

// redux-thunks
export const isLogged = () => async dispatch => {
	const data = await authAPI.isAuth();
	if (data.resultCode === 0) {
		const { email, id, login } = data.data;
		dispatch(setUserAuthActionCreator(id, login, email, true));
	}
};

export const login =
	(captcha, email, password, rememberMe) => async dispatch => {
		debugger;
		const data = await authAPI.login(captcha, email, password, rememberMe);
		if (data.resultCode === 0) {
			dispatch(isLogged());
		} else {
			if (data.resultCode === 10) {
				dispatch(getCaptchaUrl());
			}
			const errorMessage = data.messages[0];
			dispatch(stopSubmit('login', { _error: errorMessage }));
		}
	};

export const logout = () => async dispatch => {
	const data = await authAPI.logout();
	if (data.resultCode === 0) {
		dispatch(setUserAuthActionCreator(null, null, null, false));
	}
};

export const getCaptchaUrl = () => async dispatch => {
	const data = await authAPI.getCaptchaUrl();
	dispatch(setCaptchaUrlActionCreator(data.url));
};

export default authReducer;
