import React, { FC } from 'react';
import classes from './RatingButton.module.css';

interface Interface {
	vote_average: number;
}
const RatingButton: FC<Interface> = ({ vote_average }) => {
	return (
		<div className={classes.ratingButton}>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9.15327 2.34001L10.3266 4.68668C10.4866 5.01334 10.9133 5.32668 11.2733 5.38668L13.3999 5.74001C14.7599 5.96668 15.0799 6.95334 14.0999 7.92668L12.4466 9.58001C12.1666 9.86001 12.0133 10.4 12.0999 10.7867L12.5733 12.8333C12.9466 14.4533 12.0866 15.08 10.6533 14.2333L8.65994 13.0533C8.29994 12.84 7.70661 12.84 7.33994 13.0533L5.34661 14.2333C3.91994 15.08 3.05327 14.4467 3.42661 12.8333L3.89994 10.7867C3.98661 10.4 3.83327 9.86001 3.55327 9.58001L1.89994 7.92668C0.926606 6.95334 1.23994 5.96668 2.59994 5.74001L4.72661 5.38668C5.07994 5.32668 5.50661 5.01334 5.66661 4.68668L6.83994 2.34001C7.47994 1.06668 8.51994 1.06668 9.15327 2.34001Z"
					stroke="#FFAD49"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<div className={classes.ratingButtonRating}>{vote_average}</div>
		</div>
	);
};

export default RatingButton;
