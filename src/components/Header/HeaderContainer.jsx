import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { isLogged, logout } from '../../redux/auth-reducer';

const HeaderContainer = props => {
	return (
		<Header isAuth={props.isAuth} login={props.login} logout={props.logout} />
	);
};

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		isLogged: () => dispatch(isLogged()),
		logout: () => dispatch(logout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
