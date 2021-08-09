import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profilePage-reducer';
import Profile from './Profile';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		this.props.getProfile(userId);
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} />;
	}
}

const mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
		isAuth: state.auth.isAuth,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getProfile: userId => dispatch(getProfile(userId)),
	};
};

const WithUrlDataContainerComponent = withAuthRedirect(
	withRouter(ProfileContainer)
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WithUrlDataContainerComponent);
