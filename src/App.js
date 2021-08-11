import logo from './logo.svg';
import React from 'react';
import './css/App.min.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initializedApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initializedApp();
	}

	render() {
		if (!this.props.initialized) return <Preloader />;

		return (
			<div className="container">
				<HeaderContainer />
				<div className="wrapper">
					<Navbar />
					<div className="main">
						<Route
							path="/profile/:userId?"
							render={() => <ProfileContainer />}
						/>
						<Route path="/dialogs" render={() => <DialogsContainer />} />
						<Route path="/music" component={Music} />
						<Route path="/settings" component={Settings} />
						<Route path="/users" render={() => <UsersContainer />} />
						<Route path="/login" component={LoginContainer} />
					</div>
				</div>
			</div>
		);
	}
}

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
