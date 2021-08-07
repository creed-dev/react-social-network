import { combineReducers, createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogsPageReducer from './dialogsPage-reducer';
import profilePageReducer from './profilePage-reducer';
import usersPageReducer from './usersPage-reducer';

const reducers = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	usersPage: usersPageReducer,
	auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
