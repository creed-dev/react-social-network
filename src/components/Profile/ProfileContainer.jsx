import React from 'react';
import { connect } from 'react-redux';
import { setUserProfileActionCreator } from '../../redux/profilePage-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		profileAPI.getProfile(userId).then(response => {
			this.props.setUserProfile(response.data);
		});
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} />;
	}
}

const mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setUserProfile: profile => dispatch(setUserProfileActionCreator(profile)),
	};
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WithUrlDataContainerComponent);
