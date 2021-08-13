import { NavLink } from 'react-router-dom';
import userAvatar from '../../../assets/img/user-logo.png';

const User = props => {
	return (
		<div className="user">
			<div className="user__action">
				<NavLink to={`profile/${props.user.id}`}>
					<img
						src={
							props.user.photos.small != null
								? props.user.photos.small
								: userAvatar
						}
						alt="avatar"
						className="user__avatar"
					/>
				</NavLink>
				{props.user.followed ? (
					<button
						disabled={props.followingInProgress.some(
							id => id === props.user.id
						)}
						onClick={() => {
							props.unsubscribe(props.user.id);
						}}
						className="user__btn"
					>
						Unfollow
					</button>
				) : (
					<button
						disabled={props.followingInProgress.some(
							id => id === props.user.id
						)}
						onClick={() => {
							props.subscribe(props.user.id);
						}}
						className="user__btn"
					>
						Follow
					</button>
				)}
			</div>
			<div className="user__info">
				<div className="user__descr">
					<div className="user__descr-name">{props.user.name}</div>
					<div className="user__descr-status">{props.user.status}</div>
				</div>
				<div className="user__location">
					<div className="user__location-country">
						{'user.location.country'}
					</div>
					<div className="user__location-city">{'user.location.city'}</div>
				</div>
			</div>
		</div>
	);
};

export default User;
