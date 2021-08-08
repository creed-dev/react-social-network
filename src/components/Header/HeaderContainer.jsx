import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserAuthActionCreator } from '../../redux/auth-reducer';
import { headerAPI } from '../../api/api';

class HeaderContainer extends React.Component {
	componentDidMount() {
		headerAPI.isAuth().then(data => {
			if (data.resultCode === 0) {
				const { email, id, login } = data.data;
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
