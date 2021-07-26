import DialogsNameItem from './DialogsNameItem/DialogsNameItem';

const DialogsName = () => {
	const dialogsNameData = [
		{ name: 'Pavel', id: 1 },
		{ name: 'Alexey', id: 2 },
		{ name: 'Artem', id: 3 },
		{ name: 'Denis', id: 4 },
	];

	const renderDialogsName = dialogsNameData.map(name => (
		<DialogsNameItem name={name.name} id={name.id} />
	));

	return <div className="dialogs__name">{renderDialogsName}</div>;
};

export default DialogsName;
