import { headerAPI } from '../api/api';

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
				isAuth: true,
			};
		default:
			return state;
	}
};

export const setUserAuthActionCreator = (id, login, email) => ({
	type: SET_USER_AUTH,
	data: {
		id,
		login,
		email,
	},
});

export const isLogged = dispatch => {
	headerAPI.isAuth().then(data => {
		if (data.resultCode === 0) {
			const { email, id, login } = data.data;
			dispatch(setUserAuthActionCreator(id, login, email));
		}
	});
};

export default authReducer;
