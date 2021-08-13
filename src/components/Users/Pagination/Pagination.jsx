const Pagination = props => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	const pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div>
			{pages.map(page => {
				return (
					<button
						className={
							props.currentPage === page
								? 'users__page users__page_active'
								: 'users__page '
						}
						onClick={() => props.onPageChanged(page)}
					>
						{page}
					</button>
				);
			})}
		</div>
	);
};

export default Pagination;
