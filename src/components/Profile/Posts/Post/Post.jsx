import Like from './Like/Like';

const Post = props => {
	return (
		<div className="post">
			<img
				src="https://pixelbox.ru/wp-content/uploads/2020/12/avatar-youtube-10.jpg"
				alt="avatar"
				className="post__avatar"
			/>
			<div className="post__text">{props.text}</div>
			<Like count={props.likeCount} />
		</div>
	);
};

export default Post;
