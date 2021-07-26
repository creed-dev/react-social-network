import DialogsNameItem from './DialogsNameItem/DialogsNameItem';

const DialogsName = () => {
	return (
		<div className="dialogs__name">
			<DialogsNameItem name="Pavel" id="1" />
			<DialogsNameItem name="Alexey" id="2" />
			<DialogsNameItem name="Artem" id="3" />
			<DialogsNameItem name="Denis" id="4" />
		</div>
	);
};

export default DialogsName;
