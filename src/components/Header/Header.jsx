const Header = props => {
	return (
		<div className="header">
			<div className="header__logo">Anonymous Social Network</div>
			<div className="header__auth">
				{props.isAuth ? `${props.login}` : 'You are not logged in'}
			</div>
		</div>
	);
};

export default Header;
