import React from 'react';
import { AddPostReduxForm } from './AddPostReduxForm/AddPostReduxForm';
import Post from './Post/Post';

const Posts = props => {
	const renderPosts = props.posts.map(post => (
		<Post
			key={`${post}_${post.id}`}
			text={post.text}
			id={post.id}
			likeCount={post.likeCount}
		/>
	));

	const onSubmit = formData => {
		props.addNewPost(formData.newPostText);
	};

	return (
		<div className="posts">
			<h3 className="posts__header">Posts</h3>
			<AddPostReduxForm onSubmit={onSubmit} />
			{renderPosts}
		</div>
	);
};

export default Posts;
