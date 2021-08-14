import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div className="profile-info">
			{/* <div className="avatar">
				<img
					src={
						props.profile.photos.large != null
							? props.profile.photos.large
							: userAvatar
					}
					alt="avatar"
					className="avatar__img"
				/>
				{props.isOwner && (
					<div>
						<input
							class="visually-hidden"
							type="file"
							id="file"
							onChange={selectedProfilePhoto}
						/>
						<button className="avatar__btn">
							<label for="file">Choose avatar</label>
						</button>
					</div>
				)}
			</div> */}
			<ProfileAvatar
				profile={props.profile}
				isOwner={props.isOwner}
				setProfilePhoto={props.setProfilePhoto}
			/>
			<div className="profile-info__descr">
				<div className="profile-info__descr-item">
					Fullname: {props.profile.fullName}
				</div>
				<div className="profile-info__descr-item">
					Looking for a job: {props.profile.lookingForAJob ? 'Ищу' : 'Не ищу'}
				</div>
				<div className="profile-info__descr-item">Education: Higher</div>
				<ProfileStatus
					userStatus={props.userStatus}
					updateUserStatus={props.updateUserStatus}
				/>
			</div>
		</div>
	);
};

export default ProfileInfo;
