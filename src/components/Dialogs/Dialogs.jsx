import DialogsName from './DialogsName/DialogsName';

const Dialogs = () => {
	return (
		<div className="dialogs">
			<DialogsName />
			<div className="dialogs__messages">
				<div className="dialogs__messages-item">Hey!</div>
				<div className="dialogs__messages-item">Hello!</div>
				<div className="dialogs__messages-item">Yo!</div>
				<div className="dialogs__messages-item">Olla!</div>
			</div>
		</div>
	);
};

export default Dialogs;
