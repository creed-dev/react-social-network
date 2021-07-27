import Post from './Post/Post';

const Posts = props => {
	const renderPosts = props.postsData.map(post => (
		<Post text={post.text} id={post.id} likeCount={post.likeCount} />
	));

	return (
		<div className="posts">
			<h3 className="posts__header">Posts</h3>
			<div className="posts__add">
				<textarea
					cols="60"
					rows="5"
					className="posts__text"
					placeholder="Enter the text"
					maxlength="140"
				></textarea>
				<button className="posts__publish">Add post</button>
			</div>
			{renderPosts}
		</div>
	);
};

export default Posts;
