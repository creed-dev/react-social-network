import React from 'react';
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
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		usersAPI
			.getPages(this.props.currentPage, this.props.pageSize)
			.then(data => {
				this.props.setUsers(data.items);
				this.props.setTotalUsersCount(data.totalCount);
				this.props.toggleIsFetching(false);
			});
	}

	onPageChanged = page => {
		this.props.setPageNumber(page);
		this.props.toggleIsFetching(true);
		usersAPI.setPage(page, this.props.pageSize).then(data => {
			this.props.setUsers(data.items);
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
