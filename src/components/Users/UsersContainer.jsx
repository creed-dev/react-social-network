import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {
	setPageNumberActionCreator,
	setTotalUsersCountActionCreator,
	setUsersActionCreator,
	subscribeActionCreator,
	toggleFetchingActionCreator,
	unsubscribeActionCreator,
} from '../../redux/usersPage-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
				{ withCredentials: true }
			)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
				this.props.toggleIsFetching(false);
			});
	}

	onPageChanged = page => {
		this.props.setPageNumber(page);
		this.props.toggleIsFetching(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
				{ withCredentials: true }
			)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.toggleIsFetching(false);
			});
	};

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					unsubscribe={this.props.unsubscribe}
					subscribe={this.props.subscribe}
				/>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
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
		toggleIsFetching: isFetching =>
			dispatch(toggleFetchingActionCreator(isFetching)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
