import Posts from './Posts/Posts';

const Profile = props => {
	return (
		<div className="profile">
			<div className="profile-info">
				<img
					src="https://img1.goodfon.ru/wallpaper/nbig/6/4d/avatar-neytiri-zoe-saldana-7414.jpg"
					alt="avatar"
					className="profile-info__avatar"
				/>
				<div className="profile-info__descr">
					<div className="profile-info__descr-item">Name: Ilya</div>
					<div className="profile-info__descr-item">Surname: Chupin</div>
					<div className="profile-info__descr-item">Age: 23</div>
					<div className="profile-info__descr-item">Education: Higher</div>
				</div>
			</div>
			<Posts postsData={props.postsData} />
		</div>
	);
};

export default Profile;
