import { FC } from 'react';
import { ICard } from '../../../models/ICard';
import classes from './Card.module.css';
import { Link } from 'react-router-dom';
import RatingButton from '../RatingButton/RatingButton';

interface Interface {
	movie: ICard;
	type: string;
}

const Card: FC<Interface> = ({ movie, type }) => {
	console.log(classes);
	return (
		<div className={classes.container}>
			<Link to={`/${type}/${movie.id}`} className={classes.movieCard}>
				<div className={classes.rating}>
					<RatingButton vote_average={movie.vote_average} />
				</div>
				<img
					className={classes.poster}
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title}
				/>
				<div className={classes.textBlock}>
					<div className={classes.title}>{movie.title}</div>
				</div>
			</Link>
			<button className={classes.favorite} />
		</div>
	);
};

export default Card;
