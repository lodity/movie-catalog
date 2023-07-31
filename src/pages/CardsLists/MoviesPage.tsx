import { useEffect } from 'react';
import CardsContainer from '../../components/CardsContainer';
import { theMovieDBAPI } from '../../services/TheMovieDBService';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import classes from './Styles.module.css';

const MoviesPage = () => {
	const { getFavorites } = useActions();
	const { user } = useTypedSelector((state) => state.auth);
	useEffect(() => {
		getFavorites(user.id);
	}, []);
	return (
		<div className={classes.main}>
			<div className={classes.container}>
				<h1 className={classes.title}>Movies</h1>
				<CardsContainer method={theMovieDBAPI.usePopularMoviesQuery} />
			</div>
		</div>
	);
};

export default MoviesPage;
