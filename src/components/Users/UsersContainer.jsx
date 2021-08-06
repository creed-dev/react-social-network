import { connect } from 'react-redux';
import {
	setPageNumberActionCreator,
	setTotalUsersCountActionCreator,
	setUsersActionCreator,
	subscribeActionCreator,
	unsubscribeActionCreator,
} from '../../redux/usersPage-reducer';
import UsersClass from './UsersClass';

const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		subscribe: userId => dispatch(subscribeActionCreator(userId)),
		unsubscribe: userId => dispatch(unsubscribeActionCreator(userId)),
		setUsers: users => dispatch(setUsersActionCreator(users)),
		setPageNumber: pageNumber =>
			dispatch(setPageNumberActionCreator(pageNumber)),
		setTotalUsersCount: usersCount =>
			dispatch(setTotalUsersCountActionCreator(usersCount)),
	};
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;
