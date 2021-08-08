import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { isLogged } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.isLogged();
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
		isLogged: () => dispatch(isLogged),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
