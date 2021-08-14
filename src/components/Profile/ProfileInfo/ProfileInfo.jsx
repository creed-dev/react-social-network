import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div className="profile-info">
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
