import logo from './logo.svg';
import './css/App.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = props => {
	const renderDialogs = () => (
		<Dialogs
			dialogsNameData={props.dialogsNameData}
			dialogsMessagesData={props.dialogsMessagesData}
		/>
	);

	const renderProfile = () => <Profile postsData={props.postsData} />;

	return (
		<BrowserRouter>
			<div className="container">
				<Header />
				<div className="wrapper">
					<Navbar />
					<div className="main">
						<Route path="/profile" render={renderProfile} />
						<Route path="/dialogs" render={renderDialogs} />
						<Route path="/music" component={Music} />
						<Route path="/settings" component={Settings} />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
