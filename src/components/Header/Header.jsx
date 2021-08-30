import { NavLink } from 'react-router-dom';

const Header = props => {
	return (
		<div className="header">
			<div className="header__logo">Social Network</div>
			<div className="header__auth">
				{props.isAuth ? (
					<div className="header__auth-login header__auth-login_loginned">
						<div>{props.login}</div>
						<button onClick={props.logout}>Logout</button>
					</div>
				) : (
					<NavLink className="header__auth-login" to="/login">
						Login
					</NavLink>
				)}
			</div>
		</div>
	);
};

export default Header;
