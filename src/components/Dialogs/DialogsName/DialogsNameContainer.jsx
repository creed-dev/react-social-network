import { connect } from 'react-redux';
import DialogsName from './DialogsName';

const mapStateToProps = state => {
	return {
		dialogsName: state.dialogsPage.dialogsName,
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

const DialogsNameContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DialogsName);

export default DialogsNameContainer;
