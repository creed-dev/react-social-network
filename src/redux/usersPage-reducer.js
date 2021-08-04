const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET-USERS';

const initialState = {
	users: [],
};

const usersPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUBSCRIBE:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: true };
					}
					return user;
				}),
			};
		case UNSUBSCRIBE:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: false };
					}
					return user;
				}),
			};
		case SET_USERS:
			return { ...state, users: [...state.users, ...action.users] };
		default:
			return state;
	}
};

export const subscribeActionCreator = userId => ({ type: SUBSCRIBE, userId });
export const unsubscribeActionCreator = userId => ({
	type: UNSUBSCRIBE,
	userId,
});

export const setUsersActionCreator = users => ({ type: SET_USERS, users });

export default usersPageReducer;
