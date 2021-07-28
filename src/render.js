import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addNewPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export const renderApp = state => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} addNewPost={addNewPost} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
