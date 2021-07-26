import { NavLink } from 'react-router-dom';

const DialogsNameItem = props => {
	return (
		<div>
			<NavLink
				to={'/dialogs/' + props.id}
				className="dialogs__name-item"
				activeClassName="dialogs__name-item_active"
			>
				{props.name}
			</NavLink>
		</div>
	);
};

export default DialogsNameItem;
