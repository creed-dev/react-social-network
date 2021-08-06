import { connect } from 'react-redux';
import {
	setUsersActionCreator,
	subscribeActionCreator,
	unsubscribeActionCreator,
} from '../../redux/usersPage-reducer';
import UsersClass from './UsersClass';

const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		subscribe: userId => dispatch(subscribeActionCreator(userId)),
		unsubscribe: userId => dispatch(unsubscribeActionCreator(userId)),
		setUsers: users => dispatch(setUsersActionCreator(users)),
	};
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;
