import React from 'react';
import { connect } from 'react-redux';
import {
	addNewPostActionCreator,
	onNewPostChangeActionCreator,
} from '../../../redux/profilePage-reducer';
import Posts from './Posts';

const mapStateToProps = state => {
	return {
		posts: state.profilePage.postsData,
		postTextareaValue: state.profilePage.postTextareaValue,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addNewPost: () => {
			dispatch(addNewPostActionCreator());
			dispatch(onNewPostChangeActionCreator(''));
		},
		onNewPostChange: newPostText => {
			dispatch(onNewPostChangeActionCreator(newPostText));
		},
	};
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
