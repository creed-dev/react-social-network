import Preloader from '../../common/Preloader/Preloader';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileDescription from './ProfileDescription/ProfileDescription';

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
			<ProfileDescription
				isOwner={props.isOwner}
				userId={props.userId}
				profile={props.profile}
				userStatus={props.userStatus}
				updateUserStatus={props.updateUserStatus}
				setProfileData={props.setProfileData}
				editMode={props.editMode}
				setEditModeProfile={props.setEditModeProfile}
			/>
		</div>
	);
};

export default ProfileInfo;
