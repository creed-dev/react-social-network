import React from 'react';
import { connect } from 'react-redux';
import { setUserProfileActionCreator } from '../../redux/profilePage-reducer';
import Profile from './Profile';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
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
