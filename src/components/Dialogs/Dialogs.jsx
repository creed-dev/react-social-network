import DialogsMessages from './DialogsMessages/DialogsMessages';
import DialogsName from './DialogsName/DialogsName';

const Dialogs = () => {
	return (
		<div className="dialogs">
			<DialogsName />
			<DialogsMessages />
		</div>
	);
};

export default Dialogs;
