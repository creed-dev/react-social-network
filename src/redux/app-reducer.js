import { isLogged } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

const initialState = {
	initialized: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			};
		default:
			return state;
	}
};

const initializedSuccessActionCreator = () => ({
	type: INITIALIZED_SUCCESS,
});

export const initializedApp = () => dispatch => {
	const promise = dispatch(isLogged());
	promise.then(() => {
		dispatch(initializedSuccessActionCreator());
	});
};

export default appReducer;
