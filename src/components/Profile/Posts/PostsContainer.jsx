import React from 'react';
import {
	addNewPostActionCreator,
	onNewPostChangeActionCreator,
} from '../../../redux/profilePage-reducer';
import Posts from './Posts';

const PostsContainer = props => {
	const state = props.store.getState().profilePage;
	const addNewPost = () => {
		props.store.dispatch(addNewPostActionCreator());
		props.store.dispatch(onNewPostChangeActionCreator(''));
	};

	const onNewPostChange = newPostText => {
		props.store.dispatch(onNewPostChangeActionCreator(newPostText));
	};

	return (
		<Posts
			addNewPost={addNewPost}
			onNewPostChange={onNewPostChange}
			posts={state.postsData}
			postTextareaValue={state.postTextareaValue}
		/>
	);
};

export default PostsContainer;
