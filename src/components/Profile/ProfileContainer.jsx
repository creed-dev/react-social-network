import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profilePage-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

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
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getProfile: userId => dispatch(getProfile(userId)),
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect,
	withRouter
)(ProfileContainer);
