import { connect } from 'react-redux';
import DialogsName from './DialogsName';

const DialogsNameContainer = props => {
	return <DialogsName dialogsName={props.dialogsName} />;
};

const mapStateToProps = state => {
	return {
		dialogsName: state.dialogsPage.dialogsName,
	};
};

export default connect(mapStateToProps, null)(DialogsNameContainer);
