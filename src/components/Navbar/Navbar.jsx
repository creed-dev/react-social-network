import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<li>
					<NavLink
						to="/profile"
						className="navbar__item"
						activeClassName="navbar__item_active"
					>
						Profile
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/users"
						className="navbar__item"
						activeClassName="navbar__item_active"
					>
						Users
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/dialogs"
						className="navbar__item"
						activeClassName="navbar__item_active"
					>
						Dialogs
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
