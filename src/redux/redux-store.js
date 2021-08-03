import { combineReducers, createStore } from 'redux';
import dialogsPageReducer from './dialogsPage-reducer';
import profilePageReducer from './profilePage-reducer';

const reducers = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
});

let store = createStore(reducers);

export default store;
