import React from 'react';
import { connect } from 'react-redux';
import {
	getProfile,
	setProfilePhoto,
	setUserStatus,
	updateUserStatus,
} from '../../redux/profilePage-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { useEffect } from 'react';

const ProfileContainer = props => {
	useEffect(() => {
		let userId = props.match.params.userId;
		if (!userId) {
			userId = props.userId;
		}
		props.getProfile(userId);
		props.setUserStatus(userId);
	});

	return (
		<Profile
			isOwner={!props.match.params.userId}
			profile={props.profile}
			userStatus={props.userStatus}
			updateUserStatus={props.updateUserStatus}
			setProfilePhoto={props.setProfilePhoto}
		/>
	);
};

const mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
		userStatus: state.profilePage.userStatus,
		userId: state.auth.id,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getProfile: userId => dispatch(getProfile(userId)),
		setUserStatus: userId => dispatch(setUserStatus(userId)),
		updateUserStatus: status => dispatch(updateUserStatus(status)),
		setProfilePhoto: photo => dispatch(setProfilePhoto(photo)),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect,
	withRouter
)(ProfileContainer);
