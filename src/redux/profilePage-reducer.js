const ADD_NEW_POST = 'ADD-NEW-POST';
const ON_NEW_POST_CHANGE = 'ON-NEW-POST-CHANGE';

const profilePageReducer = (state, action) => {
	switch (action.type) {
		case ADD_NEW_POST:
			const newPost = {
				text: state.postTextareaValue,
				id: state.postsData.length + 1,
				likeCount: 0,
			};
			state.postsData.push(newPost);
			return state;
		case ON_NEW_POST_CHANGE:
			state.postTextareaValue = action.post;
			return state;
		default:
			return state;
	}
};

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST });

export const onNewPostChangeActionCreator = newPostText => ({
	type: ON_NEW_POST_CHANGE,
	post: newPostText,
});

export default profilePageReducer;
