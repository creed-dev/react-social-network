import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsNameData = [
	{ name: 'Pavel', id: 1 },
	{ name: 'Alexey', id: 2 },
	{ name: 'Artem', id: 3 },
	{ name: 'Denis', id: 4 },
];

const dialogsMessagesData = [
	{ message: 'Hey!', id: 1 },
	{ message: 'Hello!', id: 2 },
	{ message: 'Yo!', id: 3 },
	{ message: 'Olla!', id: 4 },
];

const postsData = [
	{ text: 'Hi!', id: 1, likeCount: 24 },
	{ text: 'Yo!', id: 2, likeCount: 32 },
	{ text: 'Olla!', id: 3, likeCount: 48 },
];

ReactDOM.render(
	<React.StrictMode>
		<App
			dialogsNameData={dialogsNameData}
			dialogsMessagesData={dialogsMessagesData}
			postsData={postsData}
		/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
