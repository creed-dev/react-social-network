import { useState } from 'react';
import { ProfileDataForm } from '../../../../reduxForm/profileDataForm';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileData from './ProfileData/ProfileData';

const ProfileDescription = props => {
	const [editMode, setEditMode] = useState(false);

	const activeEditMode = () => {
		setEditMode(true);
	};

	const onSubmit = formData => {
		props.setProfileData(formData);
		setEditMode(false);
	};

	return (
		<div className="profile-info__descr">
			{editMode ? (
				<ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} />
			) : (
				<ProfileData
					isOwner={props.isOwner}
					activeEditMode={activeEditMode}
					profile={props.profile}
				/>
			)}
			<ProfileStatus
				isOwner={props.isOwner}
				userStatus={props.userStatus}
				updateUserStatus={props.updateUserStatus}
			/>
		</div>
	);
};

export default ProfileDescription;
