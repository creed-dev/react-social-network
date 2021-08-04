import logo from './logo.svg';
import './css/App.min.css';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = props => {
	const renderDialogs = () => <Dialogs />;

	const renderProfile = () => <Profile />;
	const renderUsers = () => <UsersContainer />;

	return (
		<div className="container">
			<Header />
			<div className="wrapper">
				<Navbar />
				<div className="main">
					<Route path="/profile" render={renderProfile} />
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
