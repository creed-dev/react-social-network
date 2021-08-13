import logo from './logo.svg';
import React, { useEffect } from 'react';
import './css/App.min.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initializedApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import Dialogs from './components/Dialogs/Dialogs';

const App = props => {
	useEffect(() => {
		props.initializedApp();
	}, []);

	if (!props.initialized) return <Preloader />;

	return (
		<div className="container">
			<HeaderContainer />
			<div className="wrapper">
				<Navbar />
				<div className="main">
					<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
					<Route path="/dialogs" render={() => <Dialogs />} />
					<Route path="/music" render={() => <Music />} />
					<Route path="/settings" render={() => <Settings />} />
					<Route path="/users" render={() => <UsersContainer />} />
					<Route path="/login" render={() => <LoginContainer />} />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		initialized: state.app.initialized,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		initializedApp: () => dispatch(initializedApp()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
