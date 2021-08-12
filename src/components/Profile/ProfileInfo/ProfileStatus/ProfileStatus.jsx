import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatus = props => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.userStatus);

	const activateEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateUserStatus(status);
	};

	const onChangeInput = e => {
		setStatus(e.currentTarget.value);
	};

	useEffect(() => {
		setStatus(props.userStatus);
	}, [props.userStatus]);

	return editMode ? (
		<div onClick={activateEditMode} className="profile-info__descr-item">
			Status:{' '}
			<input
				onBlur={deactivateEditMode}
				onChange={onChangeInput}
				autoFocus={true}
				value={status}
			/>
		</div>
	) : (
		<div onClick={activateEditMode} className="profile-info__descr-item">
			{props.userStatus
				? `Status: ${props.userStatus}`
				: 'Сlick here to set the status'}
		</div>
	);
};

export default ProfileStatus;
