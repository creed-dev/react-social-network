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
						to="/dialogs"
						className="navbar__item"
						activeClassName="navbar__item_active"
					>
						Dialogs
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/music"
						className="navbar__item"
						activeClassName="navbar__item_active"
					>
						Music
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/settings"
						className="navbar__item"
						activeClassName="navbar__item_active"
					>
						Settings
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
