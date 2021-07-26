import DialogsMessagesItem from './DialogsMessagesItem/DialogsMessagesItem';

const DialogsMessages = () => {
	return (
		<div className="dialogs__messages">
			<DialogsMessagesItem message="Hey!" />
			<DialogsMessagesItem message="Hello!" />
			<DialogsMessagesItem message="Yo!" />
			<DialogsMessagesItem message="Olla!" />
		</div>
	);
};

export default DialogsMessages;
