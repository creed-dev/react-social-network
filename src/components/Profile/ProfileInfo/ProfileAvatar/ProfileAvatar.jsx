import userAvatar from '../../../../assets/img/user-logo.png';

const ProfileAvatar = props => {
	const selectedProfilePhoto = e => {
		if (e.target.files.length) {
			props.setProfilePhoto(e.target.files[0]);
		}
	};

	return (
		<div className="avatar">
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
						className="visually-hidden"
						type="file"
						id="file"
						onChange={selectedProfilePhoto}
					/>
					<button className="avatar__btn">
						<label for="file">Choose avatar</label>
					</button>
				</div>
			)}
		</div>
	);
};

export default ProfileAvatar;
