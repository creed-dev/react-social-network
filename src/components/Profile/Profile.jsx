import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
	return (
		<div className="profile">
			<ProfileInfo
				isOwner={props.isOwner}
				profile={props.profile}
				userStatus={props.userStatus}
				updateUserStatus={props.updateUserStatus}
				setProfilePhoto={props.setProfilePhoto}
				userId={props.userId}
				setProfileData={props.setProfileData}
			/>
			<PostsContainer />
		</div>
	);
};

export default Profile;
