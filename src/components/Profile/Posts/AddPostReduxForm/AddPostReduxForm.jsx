import { Field, reduxForm } from 'redux-form';
import { TextareaAddPost } from '../../../../reduxForm/FormComponents/FormComponents';
import { maxLength, required } from '../../../../reduxForm/validators';

const maxLength10 = maxLength(10);

const AddPostForm = props => {
	return (
		<form className="posts__add" onSubmit={props.handleSubmit}>
			<Field
				className="posts__text"
				component={TextareaAddPost}
				name="newPostText"
				cols="60"
				rows="5"
				placeholder="Enter the text"
				validate={[maxLength10, required]}
			/>
			<button className="posts__publish">Add Post</button>
		</form>
	);
};

export const AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm);
