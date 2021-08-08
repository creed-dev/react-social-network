import { usersAPI } from '../api/api';

const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET-USERS';
const SET_PAGE_NUMBER = 'SET-PAGE-NUMBER';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS';

const initialState = {
	users: [],
	pageSize: 50,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
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

export const getUsers = (currentPage, pageSize) => dispatch => {
	dispatch(toggleFetchingActionCreator(true));
	usersAPI.getPages(currentPage, pageSize).then(data => {
		dispatch(setUsersActionCreator(data.items));
		dispatch(setTotalUsersCountActionCreator(data.totalCount));
		dispatch(toggleFetchingActionCreator(false));
	});
};

export const changedPage = (page, pageSize) => dispatch => {
	dispatch(setPageNumberActionCreator(page));
	dispatch(toggleFetchingActionCreator(true));
	usersAPI.setPage(page, pageSize).then(data => {
		dispatch(setUsersActionCreator(data.items));
		dispatch(toggleFetchingActionCreator(false));
	});
};

export const unsubscribe = userId => dispatch => {
	dispatch(followingInProgressActionCreator(true, userId));
	usersAPI.unfollow(userId).then(data => {
		if (data.resultCode === 0) {
			dispatch(unsubscribeActionCreator(userId));
		}
		dispatch(followingInProgressActionCreator(false, userId));
	});
};

export const subscribe = userId => dispatch => {
	dispatch(followingInProgressActionCreator(true, userId));
	usersAPI.follow(userId).then(data => {
		if (data.resultCode === 0) {
			dispatch(subscribeActionCreator(userId));
		}
		dispatch(followingInProgressActionCreator(false, userId));
	});
};

export default usersPageReducer;
