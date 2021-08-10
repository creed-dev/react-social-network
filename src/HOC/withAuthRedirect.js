import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const mapStateToPropsForRedirect = state => {
	return {
		isAuth: state.auth.isAuth,
	};
};

export const withAuthRedirect = Component => {
	const RedirectComponent = props => {
		if (!props.isAuth) return <Redirect to="/login" />;
		return <Component {...props} />;
	};

	return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
