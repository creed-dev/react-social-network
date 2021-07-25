import Post from './Post/Post';

const Posts = () => {
	return (
		<div className="main">
			<div className="posts">
				<h3 className="posts__header">Posts</h3>
				<div className="posts__add">
					<textarea
						name=""
						id=""
						cols="60"
						rows="5"
						className="posts__text"
						placeholder="Enter the text"
						maxlength="140"
					></textarea>
					<button className="posts__publish">Add post</button>
				</div>
			</div>
			<Post />
			<Post />
			<Post />
		</div>
	);
};

export default Posts;
