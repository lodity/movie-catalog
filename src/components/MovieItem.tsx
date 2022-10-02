import React, { FC } from 'react';
import { INowPlayingCard } from '../models/IMovie';

interface MovieItemProps {
	movie: INowPlayingCard;
}

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
	return (
		<div className="movies__item item-movies">
			<div className="item-movies__image">
				<img
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title}
				/>
			</div>
			<div className="item-movies__text-block">
				<div className="item-movies__title">{movie.title}</div>
			</div>
		</div>
	);
};

export default MovieItem;
