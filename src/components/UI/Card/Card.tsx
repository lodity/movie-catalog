import React, { FC } from 'react';
import { ICard } from '../../../models/ICard';
import classes from './Card.module.css';
import { Link, useNavigate } from 'react-router-dom';
import RatingButton from '../RatingButton/RatingButton';

interface Interface {
	movie: ICard;
	type: string;
}

const Card: FC<Interface> = ({ movie, type }) => {
	const router = useNavigate();
	return (
		<Link to={`/:${type}/:${movie.id}`} className={classes.movieCard}>
			<div className={classes.movieCardRating}>
				<RatingButton vote_average={movie.vote_average} />
			</div>
			<img
				className={classes.movieCardPoster}
				src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
				alt={movie.title}
			/>
			<div className={classes.movieCardTextBlock}>
				<div className={classes.movieCardTitle}>{movie.title}</div>
			</div>
		</Link>
	);
};

export default Card;
