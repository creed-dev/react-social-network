import { useState } from 'react';

const Pagination = props => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	const pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	const portionSize = 10;
	const portionCount = Math.ceil(pagesCount / portionSize);
	const [portionNumber, setPortionNumber] = useState(1);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div>
			{portionNumber > 1 && (
				<button onClick={() => setPortionNumber(portionNumber - 1)}>
					PREV
				</button>
			)}
			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map(page => {
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
			{portionCount > portionNumber && (
				<button onClick={() => setPortionNumber(portionNumber + 1)}>
					NEXT
				</button>
			)}
		</div>
	);
};

export default Pagination;
