import * as axios from 'axios';
import userAvatar from '../../assets/img/user-logo.png';
import React from 'react';

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
		const pagesCount = Math.ceil(
			this.props.totalUsersCount / this.props.pageSize
		);

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
								this.props.currentPage === page
									? 'users__page users__page_active'
									: 'users__page '
							}
							onClick={() => this.onPageChanged(page)}
						>
							{page}
						</button>
					);
				})}
				{this.props.users.map(user => (
					<div className="user">
						<div className="user__action">
							<img
								src={user.photos.small != null ? user.photos.small : userAvatar}
								alt="avatar"
								className="user__avatar"
							/>
							{user.followed ? (
								<button
									onClick={() => {
										this.props.unsubscribe(user.id);
									}}
									className="user__btn"
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										this.props.subscribe(user.id);
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
								<div className="user__location-city">
									{'user.location.city'}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default UsersClass;
