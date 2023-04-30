import React, { FC } from 'react';
import classes from './ResultItem.module.css';
import { ISearchResults } from '../../../../../services/TheMovieDBService';
import { Link } from 'react-router-dom';

interface Interface {
	item: ISearchResults;
}
const ResultItem: FC<Interface> = ({ item }) => {
	const itemTitle = item.media_type === 'movie' ? item.title : item.name;
	return (
		<Link
			to={`/:${item.media_type}/:${item.id}`}
			className={classes.ResultItemContainer}
		>
			<img
				className={classes.ResultItemImage}
				src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
				alt={itemTitle}
			/>
			<div className={classes.ResultItemTextBlock}>
				<h2>{itemTitle}</h2>
				<p>{item.overview}</p>
			</div>
		</Link>
	);
};

export default ResultItem;
