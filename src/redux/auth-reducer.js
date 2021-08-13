import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

// actions types
const SET_USER_AUTH = 'SET-USER-AUTH';

// initial state
const initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
};

// reducers
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_AUTH:
			return {
				...state,
				...action.data,
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

// redux-thunks
export const isLogged = () => async dispatch => {
	const data = await authAPI.isAuth();
	if (data.resultCode === 0) {
		const { email, id, login } = data.data;
		dispatch(setUserAuthActionCreator(id, login, email, true));
	}
};

export const login =
	(email, password, rememberMe = false) =>
	async dispatch => {
		const data = await authAPI.login(email, password, rememberMe);
		if (data.resultCode === 0) {
			dispatch(isLogged());
		} else {
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

export default authReducer;
