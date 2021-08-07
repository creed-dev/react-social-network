import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserAuthActionCreator } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios
			.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
				withCredentials: true,
			})
			.then(response => {
				if (response.data.resultCode === 0) {
					const { email, id, login } = response.data.data;
					this.props.setAuthUser(id, login, email);
				}
			});
	}

	render() {
		return (
			<Header
				{...this.props}
				isAuth={this.props.isAuth}
				login={this.props.login}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setAuthUser: (id, login, email) =>
			dispatch(setUserAuthActionCreator(id, login, email)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
