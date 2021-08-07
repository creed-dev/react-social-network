import Preloader from '../../common/Preloader/Preloader';
import userAvatar from '../../../assets/img/user-logo.png';

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div className="profile-info">
			<img
				src={
					props.profile.photos.small != null
						? props.profile.photos.small
						: userAvatar
				}
				alt="avatar"
				className="profile-info__avatar"
			/>
			<div className="profile-info__descr">
				<div className="profile-info__descr-item">
					Fullname: {props.profile.fullName}
				</div>
				<div className="profile-info__descr-item">
					Looking for a job: {props.profile.lookingForAJob ? 'Ищу' : 'Не ищу'}
				</div>
				<div className="profile-info__descr-item">Education: Higher</div>
				<div className="profile-info__descr-item">
					Status: {props.profile.aboutMe}
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
