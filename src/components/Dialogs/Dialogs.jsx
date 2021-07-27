import DialogsMessages from './DialogsMessages/DialogsMessages';
import DialogsName from './DialogsName/DialogsName';

const Dialogs = props => {
	return (
		<div className="dialogs">
			<DialogsName dialogsNameData={props.dialogsNameData} />
			<DialogsMessages dialogsMessagesData={props.dialogsMessagesData} />
		</div>
	);
};

export default Dialogs;
