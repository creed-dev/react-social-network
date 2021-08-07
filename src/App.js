import logo from './logo.svg';
import './css/App.min.css';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = props => {
	const renderDialogs = () => <Dialogs />;

	const renderProfile = () => <ProfileContainer />;
	const renderUsers = () => <UsersContainer />;

	return (
		<div className="container">
			<HeaderContainer />
			<div className="wrapper">
				<Navbar />
				<div className="main">
					<Route path="/profile/:userId?" render={renderProfile} />
					<Route path="/dialogs" render={renderDialogs} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
					<Route path="/users" render={renderUsers} />
				</div>
			</div>
		</div>
	);
};

export default App;
