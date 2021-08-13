import React from 'react';
import Pagination from './Pagination/Pagination';
import User from './User/User';

const Users = props => {
	return (
		<div className="users">
			<Pagination
				currentPage={props.currentPage}
				onPageChanged={props.onPageChanged}
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
			/>
			{props.users.map(user => (
				<User
					user={user}
					followingInProgress={props.followingInProgress}
					unsubscribe={props.unsubscribe}
					subscribe={props.subscribe}
				/>
			))}
		</div>
	);
};

export default Users;
