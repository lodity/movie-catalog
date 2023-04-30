import React, { FC, useEffect, useState } from 'react';
import {
	ISearchResults,
	theMovieDBAPI,
} from '../../../../services/TheMovieDBService';
import { SearchType } from '../SearchInput';
import classes from './SearchResults.module.css';
import ResultItem from './ResultItem/ResultItem';
import Card from '../../Card/Card';

interface Interface {
	searchType: SearchType;
	debouncedSearchTerm: string;
}
const SearchResults: FC<Interface> = ({ searchType, debouncedSearchTerm }) => {
	const [cards, setCards]: any = useState([]);
	const [page, setPage] = useState(1);
	const [include_adult, setInclude_adult] = useState(false);
	const [searchTerm, setSearchTerm] = useState(debouncedSearchTerm);
	const { data, isLoading, error } = theMovieDBAPI.useSearchQuery({
		searchType,
		page,
		searchTerm,
		include_adult,
	});
	const results = data?.results ?? [];

	useEffect(() => {
		if (
			debouncedSearchTerm.length === 0 ||
			debouncedSearchTerm.length > 2
		) {
			setSearchTerm(debouncedSearchTerm);
		}
	}, [debouncedSearchTerm]);
	useEffect(() => {
		if (data) {
			console.log(data);
			setCards([...cards, ...data.results]);
		}
	}, [data]);

	console.log(results);
	return (
		<div className={classes.SearchResultsContainer}>
			{cards &&
				cards
					.filter(
						(item: ISearchResults) =>
							item.poster_path !== null &&
							item.backdrop_path !== null &&
							(item.media_type === 'movie' ||
								item.media_type === 'tv')
					)
					.map((item: any) => (
						<ResultItem key={item.id} item={item} />
					))}
		</div>
	);
};

export default SearchResults;
