import React, { FC } from 'react';
import classes from './CardPlaceholder.module.css';

const CardPlaceholder = () => {
	return (
		<div className={classes.cardPlaceholder}>
			<div className={classes.cardPlaceholderRating}></div>
			<div className={classes.cardPlaceholderPoster}></div>
			<div className={classes.cardPlaceholderTitle}></div>
		</div>
	);
};

export default CardPlaceholder;
