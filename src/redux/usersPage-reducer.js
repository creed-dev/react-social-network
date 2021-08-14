import { usersAPI } from '../api/api';

// actions types
const SUBSCRIBE = 'users/SUBSCRIBE';
const UNSUBSCRIBE = 'users/UNSUBSCRIBE';
const SET_USERS = 'users/SET-USERS';
const SET_PAGE_NUMBER = 'users/SET-PAGE-NUMBER';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_FETCHING = 'users/TOGGLE-FETCHING';
const FOLLOWING_IN_PROGRESS = 'users/FOLLOWING-IN-PROGRESS';

// initial state
const initialState = {
	users: [],
	pageSize: 50,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
};

// reducers
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
		case TOGGLE_FETCHING:
			return { ...state, isFetching: action.isFetching };
		case FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress: action.inProgress
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId),
			};
		default:
			return state;
	}
};

// actions creators
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
export const toggleFetchingActionCreator = isFetching => ({
	type: TOGGLE_FETCHING,
	isFetching,
});
export const followingInProgressActionCreator = (inProgress, userId) => ({
	type: FOLLOWING_IN_PROGRESS,
	inProgress,
	userId,
});

// redux-thunks
export const getUsers = (currentPage, pageSize) => async dispatch => {
	dispatch(toggleFetchingActionCreator(true));
	const data = await usersAPI.getPages(currentPage, pageSize);
	dispatch(setUsersActionCreator(data.items));
	dispatch(setTotalUsersCountActionCreator(data.totalCount));
	dispatch(toggleFetchingActionCreator(false));
};

export const changedPage = (page, pageSize) => async dispatch => {
	dispatch(setPageNumberActionCreator(page));
	dispatch(toggleFetchingActionCreator(true));
	const data = await usersAPI.setPage(page, pageSize);
	dispatch(setUsersActionCreator(data.items));
	dispatch(toggleFetchingActionCreator(false));
};

export const unsubscribe = userId => async dispatch => {
	dispatch(followingInProgressActionCreator(true, userId));
	const data = await usersAPI.unfollow(userId);
	if (data.resultCode === 0) {
		dispatch(unsubscribeActionCreator(userId));
	}
	dispatch(followingInProgressActionCreator(false, userId));
};

export const subscribe = userId => async dispatch => {
	dispatch(followingInProgressActionCreator(true, userId));
	const data = await usersAPI.follow(userId);
	if (data.resultCode === 0) {
		dispatch(subscribeActionCreator(userId));
	}
	dispatch(followingInProgressActionCreator(false, userId));
};

export default usersPageReducer;
