import React from 'react';
import { connect } from 'react-redux';
import { addNewPostActionCreator } from '../../../redux/profilePage-reducer';
import Posts from './Posts';

const PostsContainer = props => {
	return (
		<Posts
			posts={props.posts}
			postTextareaValue={props.postTextareaValue}
			addNewPost={props.addNewPost}
		/>
	);
};

const mapStateToProps = state => {
	return {
		posts: state.profilePage.postsData,
		postTextareaValue: state.profilePage.postTextareaValue,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addNewPost: text => {
			dispatch(addNewPostActionCreator(text));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
