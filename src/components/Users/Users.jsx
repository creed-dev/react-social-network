const Users = props => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				avatar:
					'https://ru-static.z-dn.net/files/d5d/f71519847c439d7a1f96f9f9908ccaab.jpg',
				followed: true,
				fullName: {
					name: 'Ilya',
					surname: 'Chupin',
				},
				status: 'Ola!',
				location: {
					country: 'Russia',
					city: 'Moscow',
				},
			},
			{
				id: 2,
				avatar:
					'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
				followed: false,
				fullName: {
					name: 'Pavel',
					surname: 'Shapovalov',
				},
				status: 'Hello!',
				location: {
					country: 'Russia',
					city: 'Novosibirsk',
				},
			},
			{
				id: 3,
				avatar:
					'https://demotivation.ru/wp-content/uploads/2020/06/s1200-28-10-1024x1024.jpg',
				followed: true,
				fullName: {
					name: 'Alex',
					surname: 'Korobkin',
				},
				status: 'Privet!',
				location: {
					country: 'Russia',
					city: 'Karasuk',
				},
			},
		]);
	}

	const renderUserCards = props.users.map(user => (
		<div className="user">
			<div className="user__action">
				<img src={user.avatar} alt="avatar" className="user__avatar" />
				{user.followed ? (
					<button
						onClick={() => {
							props.unsubscribe(user.id);
						}}
						className="user__btn"
					>
						Unfollow
					</button>
				) : (
					<button
						onClick={() => {
							props.subscribe(user.id);
						}}
						className="user__btn"
					>
						Follow
					</button>
				)}
			</div>
			<div className="user__info">
				<div className="user__descr">
					<div className="user__descr-name">
						{user.fullName.name}
						&nbsp;
						{user.fullName.surname}
					</div>
					<div className="user__descr-status">{user.status}</div>
				</div>
				<div className="user__location">
					<div className="user__location-country">{user.location.country}</div>
					<div className="user__location-city">{user.location.city}</div>
				</div>
			</div>
		</div>
	));
	return <div className="users">{renderUserCards}</div>;
};

export default Users;
