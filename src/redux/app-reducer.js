import { isLogged } from './auth-reducer';

// actions types
const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';

// initial state
const initialState = {
	initialized: false,
};

// reducers
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

// actions creators
const initializedSuccessActionCreator = () => ({
	type: INITIALIZED_SUCCESS,
});

// redux-thunks
export const initializedApp = () => async dispatch => {
	const promise = dispatch(isLogged());
	await promise;
	dispatch(initializedSuccessActionCreator());
};

export default appReducer;
