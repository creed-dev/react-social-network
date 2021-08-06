const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET-USERS';
const SET_PAGE_NUMBER = 'SET-PAGE-NUMBER';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

const initialState = {
	users: [],
	pageSize: 50,
	totalUsersCount: 0,
	currentPage: 1,
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
			return { ...state, users: [...action.users] };
		case SET_PAGE_NUMBER:
			return { ...state, currentPage: action.pageNumber };
		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.usersCount };
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
export const setPageNumberActionCreator = pageNumber => ({
	type: SET_PAGE_NUMBER,
	pageNumber,
});
export const setTotalUsersCountActionCreator = usersCount => ({
	type: SET_TOTAL_USERS_COUNT,
	usersCount,
});

export default usersPageReducer;
