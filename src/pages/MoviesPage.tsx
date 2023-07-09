import React, { useEffect } from 'react';
import SearchInput from '../components/UI/SearchInput/SearchInput';
import CardsContainer from '../components/CardsContainer';
import { theMovieDBAPI } from '../services/TheMovieDBService';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const MoviesPage = () => {
	const { getFavorites } = useActions();
	const { user } = useTypedSelector((state) => state.auth);
	useEffect(() => {
		getFavorites(user.id);
	}, []);
	return (
		<div className="movies">
			<div className="movies__container">
				<h1 className="movies__title title">Movies</h1>
				{/*<SearchInput classUi="movies__input" searchType="movie" />*/}
				<CardsContainer method={theMovieDBAPI.usePopularMoviesQuery} />
			</div>
		</div>
	);
};

export default MoviesPage;
