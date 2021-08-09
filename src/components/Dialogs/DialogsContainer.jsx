import DialogsMessagesContainer from './DialogsMessages/DialogsMessagesContainer';
import DialogsNameContainer from './DialogsName/DialogsNameContainer';
import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

class DialogsContainer extends React.Component {
	render() {
		return (
			<div className="dialogs">
				<DialogsNameContainer />
				<DialogsMessagesContainer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
	};
};

export default withAuthRedirect(connect(mapStateToProps)(DialogsContainer));
