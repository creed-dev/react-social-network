import React from 'react';
import {
	addNewPostActionCreator,
	onNewPostChangeActionCreator,
} from '../../../redux/profilePage-reducer';
import Post from './Post/Post';

const Posts = props => {
	const renderPosts = props.postsData.map(post => (
		<Post text={post.text} id={post.id} likeCount={post.likeCount} />
	));

	const newPostTextarea = React.createRef();
	const addNewPost = () => {
		props.dispatch(addNewPostActionCreator());
		props.dispatch(onNewPostChangeActionCreator(''));
	};

	const onNewPostChange = () => {
		const newPostText = newPostTextarea.current.value;
		props.dispatch(onNewPostChangeActionCreator(newPostText));
	};

	return (
		<div className="posts">
			<h3 className="posts__header">Posts</h3>
			<div className="posts__add">
				<textarea
					cols="60"
					rows="5"
					className="posts__text"
					placeholder="Enter the text"
					maxLength="140"
					ref={newPostTextarea}
					value={props.postTextareaValue}
					onChange={onNewPostChange}
				/>
				<button className="posts__publish" onClick={addNewPost}>
					Add post
				</button>
			</div>
			{renderPosts}
		</div>
	);
};

export default Posts;
