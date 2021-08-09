import DialogsMessagesContainer from './DialogsMessages/DialogsMessagesContainer';
import DialogsNameContainer from './DialogsName/DialogsNameContainer';
import React from 'react';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

const Dialogs = props => {
	return (
		<div className="dialogs">
			<DialogsNameContainer />
			<DialogsMessagesContainer />
		</div>
	);
};

export default withAuthRedirect(Dialogs);
