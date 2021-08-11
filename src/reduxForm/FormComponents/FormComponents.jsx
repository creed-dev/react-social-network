import React from 'react';

export const TextareaAddPost = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;

	return (
		<div>
			<div className={hasError ? 'validate__post validate__post_body' : ''}>
				<textarea {...input} {...props} />
			</div>
			{hasError && (
				<div className={hasError ? 'validate__post validate__post_span' : ''}>
					{meta.error}
				</div>
			)}
		</div>
	);
};

export const InputLogin = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;

	return (
		<div>
			<div className={hasError ? 'validate__login validate__login_body' : ''}>
				<input {...input} {...props} />
			</div>
			{hasError && (
				<div className={hasError ? 'validate__login validate__login_span' : ''}>
					{meta.error}
				</div>
			)}
		</div>
	);
};
