import { Field, reduxForm } from 'redux-form';

const AddPostForm = props => {
	return (
		<form className="posts__add" onSubmit={props.handleSubmit}>
			<Field
				className="posts__text"
				component="textarea"
				name="newPostText"
				cols="60"
				rows="5"
				placeholder="Enter the text"
			/>
			<button className="posts__publish">Add Post</button>
		</form>
	);
};

export const AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm);
