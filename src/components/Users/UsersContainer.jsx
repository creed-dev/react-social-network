import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {
	setPageNumberActionCreator,
	setTotalUsersCountActionCreator,
	setUsersActionCreator,
	subscribeActionCreator,
	unsubscribeActionCreator,
} from '../../redux/usersPage-reducer';
import User from './Users';

class UsersClass extends React.Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = page => {
		this.props.setPageNumber(page);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
			)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	};

	render() {
		return (
			<User
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				unsubscribe={this.props.unsubscribe}
				subscribe={this.props.subscribe}
			/>
		);
	}
}

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
