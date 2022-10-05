import React from 'react';
import { movieAPI } from '../services/MovieService';
import MovieCard from './UI/MovieCard/MovieCard';

const PopularMoviesContainer = () => {
	const { data: data } = movieAPI.usePopularMoviesQuery(1);
	if (data) console.log(data);

	return (
		<div className="movies">
			<div className="movies__container">
				<div className="movies__content">
					{data &&
						data.results
							.filter((movie) => movie.poster_path !== null)
							.map((movie) => (
								<MovieCard key={movie.id} movie={movie} />
							))}
				</div>
			</div>
		</div>
	);
};

export default PopularMoviesContainer;
