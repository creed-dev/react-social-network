import React from 'react';
import { connect } from 'react-redux';
import {
	getProfile,
	setUserStatus,
	updateUserStatus,
} from '../../redux/profilePage-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 18852;
		}
		this.props.getProfile(userId);
		this.props.setUserStatus(userId);
	}

	render() {
		return (
			<Profile
				{...this.props}
				profile={this.props.profile}
				userStatus={this.props.userStatus}
				updateUserStatus={this.props.updateUserStatus}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
		userStatus: state.profilePage.userStatus,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getProfile: userId => dispatch(getProfile(userId)),
		setUserStatus: userId => dispatch(setUserStatus(userId)),
		updateUserStatus: status => dispatch(updateUserStatus(status)),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	// withAuthRedirect,
	withRouter
)(ProfileContainer);
