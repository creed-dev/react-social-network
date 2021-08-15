const ProfileData = props => {
	return (
		<div>
			{props.isOwner && <button onClick={props.activeEditMode}>Edit</button>}
			<div className="profile-info__descr-item">
				Fullname: {props.profile.fullName}
			</div>
			{props.profile.aboutMe ? (
				<div className="profile-info__descr-item">
					About me: {props.profile.aboutMe}
				</div>
			) : (
				''
			)}
			<div className="profile-info__descr-item">
				Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}
			</div>
			{props.profile.lookingForAJob ? (
				<div className="profile-info__descr-item">
					Description: {props.profile.lookingForAJobDescription}
				</div>
			) : (
				''
			)}
			<div className="profile-info__descr-item">
				<b>Contacts:</b>
			</div>
			{props.profile.contacts.facebook && (
				<div className="profile-info__descr-item__facebook">
					Facebook: {props.profile.contacts.facebook}
				</div>
			)}
			{props.profile.contacts.instagram && (
				<div className="profile-info__descr-item__instagram">
					Instagram: {props.profile.contacts.instagram}
				</div>
			)}
			{props.profile.contacts.github && (
				<div className="profile-info__descr-item__github">
					Git: {props.profile.contacts.github}
				</div>
			)}
		</div>
	);
};

export default ProfileData;
