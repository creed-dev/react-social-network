import DialogsMessages from './DialogsMessages/DialogsMessages';
import DialogsName from './DialogsName/DialogsName';

const Dialogs = props => {
	return (
		<div className="dialogs">
			<DialogsName dialogsName={props.dialogsPage.dialogsName} />
			<DialogsMessages
				dialogsMessagesData={props.dialogsPage.dialogsMessagesData}
				dialogsSendMessageValue={props.dialogsPage.dialogsSendMessageValue}
				dispatch={props.dispatch}
			/>
		</div>
	);
};

export default Dialogs;
