import React from 'react';
import { movieAPI } from '../services/MovieService';
import MovieItem from './MovieItem';

const NowPlayingMoviesContainer = () => {
	const { data: data } = movieAPI.useFetchTop250MoviesQuery(3);
	if (data) console.log(data);

	return (
		<div className="movies">
			<div className="movies__container">
				<div className="movies__content">
					{data &&
						data.results
							.filter((movie) => movie.poster_path !== null)
							.map((movie) => (
								<MovieItem key={movie.id} movie={movie} />
							))}
				</div>
			</div>
		</div>
	);
};

export default NowPlayingMoviesContainer;
