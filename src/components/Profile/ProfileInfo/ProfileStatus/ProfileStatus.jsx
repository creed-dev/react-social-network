import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.userStatus,
	};

	activateEditMode = () => {
		this.setState({
			editMode: true,
		});
	};

	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		});
		this.props.updateUserStatus(this.state.status);
	};

	onChangeInput = e => {
		this.setState({
			status: e.currentTarget.value,
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.userStatus !== this.props.userStatus) {
			this.setState({
				status: this.props.userStatus,
			});
		}
	}

	render() {
		return this.state.editMode ? (
			<div onClick={this.activateEditMode} className="profile-info__descr-item">
				Status:{' '}
				<input
					onBlur={this.deactivateEditMode}
					onChange={this.onChangeInput}
					autoFocus={true}
					value={this.state.status}
				/>
			</div>
		) : (
			<div
				onClick={this.activateEditMode.bind(this)}
				className="profile-info__descr-item"
			>
				{this.props.userStatus
					? `Status: ${this.props.userStatus}`
					: 'Сlick here to set the status'}
			</div>
		);
	}
}

export default ProfileStatus;
