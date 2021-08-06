import * as axios from 'axios';
import userAvatar from '../../assets/img/user-logo.png';
import React from 'react';

class UsersClass extends React.Component {
	constructor(props) {
		super(props);

		axios
			.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {
		return (
			<div className="users">
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
