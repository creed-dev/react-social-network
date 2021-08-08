// import DialogsMessagesContainer from './DialogsMessages/DialogsMessagesContainer';
// import DialogsNameContainer from './DialogsName/DialogsNameContainer';

// const Dialogs = props => {
// 	return (
// 		<div className="dialogs">
// 			<DialogsNameContainer />
// 			<DialogsMessagesContainer />
// 		</div>
// 	);
// };

// export default Dialogs;

import DialogsMessagesContainer from './DialogsMessages/DialogsMessagesContainer';
import DialogsNameContainer from './DialogsName/DialogsNameContainer';
import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router';

class DialogsContainer extends React.Component {
	render() {
		if (!this.props.isAuth) return <Redirect to="/login" />;

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

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
