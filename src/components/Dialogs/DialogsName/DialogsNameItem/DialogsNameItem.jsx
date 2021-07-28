import { NavLink } from 'react-router-dom';

const DialogsNameItem = props => {
	return (
		<div className="dialogs__name-item">
			<img
				src={props.avatar}
				alt="profile-avatar"
				className="dialogs__name-avatar"
			/>
			<NavLink
				to={'/dialogs/' + props.id}
				className="dialogs__name-name"
				activeClassName="dialogs__name-name_active"
			>
				{props.name}
			</NavLink>
		</div>
	);
};

export default DialogsNameItem;
