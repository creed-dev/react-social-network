import DialogsMessagesContainer from './DialogsMessages/DialogsMessagesContainer';
import DialogsName from './DialogsName/DialogsName';

const Dialogs = props => {
	return (
		<div className="dialogs">
			<DialogsName
				dialogsName={props.store.getState().dialogsPage.dialogsName}
			/>
			<DialogsMessagesContainer store={props.store} />
		</div>
	);
};

export default Dialogs;
