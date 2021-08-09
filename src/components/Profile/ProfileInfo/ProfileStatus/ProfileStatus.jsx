import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
	};

	activateEditMode() {
		this.setState({
			editMode: true,
		});
	}

	deactivateEditMode() {
		this.setState({
			editMode: false,
		});
	}

	render() {
		return this.state.editMode ? (
			<div
				onClick={this.activateEditMode.bind(this)}
				className="profile-info__descr-item"
			>
				Status:{' '}
				<input
					onBlur={this.deactivateEditMode.bind(this)}
					autoFocus={true}
					value={this.props.status}
				/>
			</div>
		) : (
			<div
				onClick={this.activateEditMode.bind(this)}
				className="profile-info__descr-item"
			>
				Status: {this.props.status}
			</div>
		);
	}
}

export default ProfileStatus;
