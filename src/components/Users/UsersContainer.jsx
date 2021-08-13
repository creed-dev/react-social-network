import React from 'react';
import { connect } from 'react-redux';
import {
	getUsers,
	changedPage,
	unsubscribe,
	subscribe,
} from '../../redux/usersPage-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { useEffect } from 'react';

const UsersContainer = props => {
	useEffect(() => {
		props.getUsers(props.currentPage, props.pageSize);
	}, []);

	const onPageChanged = page => {
		props.changedPage(page, props.pageSize);
	};

	return (
		<>
			{props.isFetching ? <Preloader /> : null}
			<Users
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
				currentPage={props.currentPage}
				onPageChanged={onPageChanged}
				users={props.users}
				unsubscribe={props.unsubscribe}
				subscribe={props.subscribe}
				followingInProgress={props.followingInProgress}
				toggleFollowingProgress={props.toggleFollowingProgress}
			/>
		</>
	);
};

const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		subscribe: userId => dispatch(subscribe(userId)),
		unsubscribe: userId => dispatch(unsubscribe(userId)),
		getUsers: (currentPage, pageSize) =>
			dispatch(getUsers(currentPage, pageSize)),
		changedPage: (page, pageSize) => dispatch(changedPage(page, pageSize)),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
	// withAuthRedirect
)(UsersContainer);
