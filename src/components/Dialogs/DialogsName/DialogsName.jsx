import DialogsNameItem from './DialogsNameItem/DialogsNameItem';

const DialogsName = props => {
	const renderDialogsName = props.dialogsNameData.map(name => (
		<DialogsNameItem name={name.name} id={name.id} />
	));

	return <div className="dialogs__name">{renderDialogsName}</div>;
};

export default DialogsName;
