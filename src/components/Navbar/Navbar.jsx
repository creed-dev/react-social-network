const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<li>
					<a href="/profile" className="navbar__item">
						Profile
					</a>
				</li>
				<li>
					<a href="/dialogs" className="navbar__item">
						Dialogs
					</a>
				</li>
				<li>
					<a href="/music" className="navbar__item">
						Music
					</a>
				</li>
				<li>
					<a href="/settings" className="navbar__item">
						Settings
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
