import React from 'react';
import { NavLink } from 'react-router-dom';
import userAvatar from '../../assets/img/user-logo.png';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';

const User = props => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	const pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div className="users">
			{pages.map(page => {
				return (
					<button
						className={
							props.currentPage === page
								? 'users__page users__page_active'
								: 'users__page '
						}
						onClick={() => props.onPageChanged(page)}
					>
						{page}
					</button>
				);
			})}
			{props.users.map(user => (
				<div className="user">
					<div className="user__action">
						<NavLink to={`profile/${user.id}`}>
							<img
								src={user.photos.small != null ? user.photos.small : userAvatar}
								alt="avatar"
								className="user__avatar"
							/>
						</NavLink>
						{user.followed ? (
							<button
								onClick={() => {
									usersAPI.unfollow(user.id).then(data => {
										if (data.resultCode === 0) {
											props.unsubscribe(user.id);
										}
									});
								}}
								className="user__btn"
							>
								Unfollow
							</button>
						) : (
							<button
								onClick={() => {
									usersAPI.follow(user.id).then(data => {
										if (data.resultCode === 0) {
											props.subscribe(user.id);
										}
									});
								}}
								className="user__btn"
							>
								Follow
							</button>
						)}
					</div>
					<div className="user__info">
						<div className="user__descr">
							<div className="user__descr-name">{user.name}</div>
							<div className="user__descr-status">{user.status}</div>
						</div>
						<div className="user__location">
							<div className="user__location-country">
								{'user.location.country'}
							</div>
							<div className="user__location-city">{'user.location.city'}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default User;
