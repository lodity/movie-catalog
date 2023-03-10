import React from 'react';
import SearchInput from '../components/UI/SearchInput/SearchInput';
import MoviesContainer from '../components/MoviesContainer';
import { movieAPI } from '../services/MovieService';

const Movies = () => {
	return (
		<div className="movies">
			<div className="movies__container">
				<h1 className="movies__title title">Movies</h1>
				<SearchInput classUi="movies__input" />
				<MoviesContainer method={movieAPI.usePopularMoviesQuery} />
			</div>
		</div>
	);
};

export default Movies;
