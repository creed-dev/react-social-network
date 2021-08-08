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

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = page => {
		this.props.changedPage(page, this.props.pageSize);
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
					followingInProgress={this.props.followingInProgress}
					toggleFollowingProgress={this.props.toggleFollowingProgress}
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
