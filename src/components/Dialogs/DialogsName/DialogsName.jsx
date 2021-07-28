import DialogsNameItem from './DialogsNameItem/DialogsNameItem';

const DialogsName = props => {
	const renderDialogsName = props.dialogsName.map(item => (
		<DialogsNameItem avatar={item.avatar} name={item.name} id={item.id} />
	));

	return <div className="dialogs__name">{renderDialogsName}</div>;
};

export default DialogsName;
