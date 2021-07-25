const Like = props => {
	return (
		<div className="main">
			<div className="like">
				<img
					src="https://www.pinclipart.com/picdir/big/48-486837_thumbs-up-thumbs-up-icon-font-awesome-clipart.png"
					alt="like"
					className="like__icon"
				/>
				<div className="like__count">{props.count}</div>
			</div>
		</div>
	);
};

export default Like;
