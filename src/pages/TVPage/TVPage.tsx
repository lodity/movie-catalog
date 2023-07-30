import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CardsContainer from '../../components/CardsContainer';
import { theMovieDBAPI } from '../../services/TheMovieDBService';
import classes from './TVPage.module.css';

const TvPage = () => {
	const { getFavorites } = useActions();
	const { user } = useTypedSelector((state) => state.auth);
	useEffect(() => {
		getFavorites(user.id);
	}, []);
	return (
		<div className={classes.main}>
			<div className={classes.container}>
				<h1 className={classes.title}>Movies</h1>
				<CardsContainer method={theMovieDBAPI.usePopularTVsQuery} />
			</div>
		</div>
	);
};

export default TvPage;
