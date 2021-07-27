import DialogsMessagesItem from './DialogsMessagesItem/DialogsMessagesItem';

const DialogsMessages = props => {
	const renderDialogMessages = props.dialogsMessagesData.map(message => (
		<DialogsMessagesItem message={message.message} id={message.id} />
	));

	return <div className="dialogs__messages">{renderDialogMessages}</div>;
};

export default DialogsMessages;
