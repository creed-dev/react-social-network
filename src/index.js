import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	addNewPost,
	onChangeMessage,
	onNewPostChange,
	sendNewMessage,
	subscribe,
} from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';

const renderApp = state => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					state={state}
					addNewPost={addNewPost}
					onNewPostChange={onNewPostChange}
					sendNewMessage={sendNewMessage}
					onChangeMessage={onChangeMessage}
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
};

renderApp(state);
subscribe(renderApp);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
