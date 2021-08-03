import DialogsMessagesContainer from './DialogsMessages/DialogsMessagesContainer';
import DialogsName from './DialogsName/DialogsName';
import DialogsNameContainer from './DialogsName/DialogsNameContainer';

const Dialogs = props => {
	return (
		<div className="dialogs">
			<DialogsNameContainer />
			<DialogsMessagesContainer />
		</div>
	);
};

export default Dialogs;
