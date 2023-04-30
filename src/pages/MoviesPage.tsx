import React from 'react';
import SearchInput from '../components/UI/SearchInput/SearchInput';
import CardsContainer from '../components/CardsContainer';
import { theMovieDBAPI } from '../services/TheMovieDBService';

const MoviesPage = () => {
	return (
		<div className="movies">
			<div className="movies__container">
				<h1 className="movies__title title">Movies</h1>
				<SearchInput classUi="movies__input" searchType="movie" />
				<CardsContainer method={theMovieDBAPI.usePopularMoviesQuery} />
			</div>
		</div>
	);
};

export default MoviesPage;
