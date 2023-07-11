import { FC, useRef } from 'react';
import { ICard } from '../../../models/ICard';
import classes from './Card.module.css';
import { Link } from 'react-router-dom';
import RatingButton from '../RatingButton/RatingButton';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IFavoriteItem } from '../../../models/IFavorites';

interface Interface {
	movie: ICard | IFavoriteItem;
	type: string;
}

const Card: FC<Interface> = ({ movie, type }) => {
	const { addFavorites, removeFavoriteById } = useActions();
	const { user, isAuthenticated } = useTypedSelector((state) => state.auth);
	const { favorites } = useTypedSelector((state) => state.favorite);
	const refFavoriteButton = useRef<HTMLButtonElement>(null);

	return (
		<li className={classes.container}>
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
			{!isAuthenticated ? (
				<Link to="/login" className={classes.favorite} />
			) : (
				<button
					onClick={() => {
						if (
							!refFavoriteButton?.current?.classList.contains(
								classes.favoriteActive
							)
						)
							addFavorites(user.id, [
								{ ...movie, media_type: type },
							]);
						else removeFavoriteById(user.id, movie.id);
					}}
					ref={refFavoriteButton}
					className={`${classes.favorite} ${
						favorites.filter((item) => item.id === movie.id)
							.length && classes.favoriteActive
					}`}
				/>
			)}
		</li>
	);
};

export default Card;
