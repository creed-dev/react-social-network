import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	document.getElementById('root')
);

reportWebVitals();
