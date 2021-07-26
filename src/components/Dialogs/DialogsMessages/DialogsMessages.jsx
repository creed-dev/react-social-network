import DialogsMessagesItem from './DialogsMessagesItem/DialogsMessagesItem';

const DialogsMessages = () => {
	const dialogMessagesData = [
		{ message: 'Hey!', id: 1 },
		{ message: 'Hello!', id: 2 },
		{ message: 'Yo!', id: 3 },
		{ message: 'Olla!', id: 4 },
	];

	const renderDialogMessages = dialogMessagesData.map(message => (
		<DialogsMessagesItem message={message.message} id={message.id} />
	));

	return <div className="dialogs__messages">{renderDialogMessages}</div>;
};

export default DialogsMessages;
