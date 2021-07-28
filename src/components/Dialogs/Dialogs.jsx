import DialogsMessages from './DialogsMessages/DialogsMessages';
import DialogsName from './DialogsName/DialogsName';

const Dialogs = props => {
	return (
		<div className="dialogs">
			<DialogsName dialogsName={props.dialogsPage.dialogsName} />
			<DialogsMessages
				dialogsMessagesData={props.dialogsPage.dialogsMessagesData}
				dialogsSendMessageValue={props.dialogsPage.dialogsSendMessageValue}
				sendNewMessage={props.sendNewMessage}
				onChangeMessage={props.onChangeMessage}
			/>
		</div>
	);
};

export default Dialogs;
