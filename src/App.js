import logo from './logo.svg';
import './css/App.min.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
	return (
		<div className="container">
			<Header />
			<div className="wrapper">
				<Navbar />
				<div className="main">
					<Profile />
				</div>
			</div>
		</div>
	);
};

export default App;
