import { authAPI } from '../api/api';

const SET_USER_AUTH = 'SET-USER-AUTH';

const initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
};

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

export const setUserAuthActionCreator = (id, login, email, isAuth) => ({
	type: SET_USER_AUTH,
	data: {
		id,
		login,
		email,
		isAuth,
	},
});

export const isLogged = () => dispatch => {
	authAPI.isAuth().then(data => {
		if (data.resultCode === 0) {
			const { email, id, login } = data.data;
			dispatch(setUserAuthActionCreator(id, login, email, true));
		}
	});
};

export const login =
	(email, password, rememberMe = false) =>
	dispatch => {
		authAPI.login(email, password, rememberMe).then(data => {
			if (data.resultCode === 0) {
				dispatch(isLogged());
			}
		});
	};

export const logout = () => dispatch => {
	authAPI.logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(setUserAuthActionCreator(null, null, null, false));
		}
	});
};

export default authReducer;
