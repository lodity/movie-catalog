import React, { FC, useEffect, useRef, useState } from 'react';
import { theMovieDBAPI } from '../../../../services/TheMovieDBService';
import { SearchType } from '../SearchInput';
import classes from './SearchResults.module.css';
import ResultItem from './ResultItem/ResultItem';
import { useObserver } from '../../../../hooks/useObserver';
import { ISearchResults } from '../../../../models/ISearchResults';
interface Interface {
	searchType: SearchType;
	debouncedSearchTerm: string;
}
const SearchResults: FC<Interface> = ({ searchType, debouncedSearchTerm }) => {
	const [cards, setCards]: any = useState([]);
	const [page, setPage] = useState(1);
	const [include_adult, setInclude_adult] = useState(false);
	const [searchTerm, setSearchTerm] = useState(debouncedSearchTerm);
	const lastElement = useRef<HTMLDivElement | null>(null);
	// API request
	const { data, isLoading, error, isFetching, isSuccess } =
		theMovieDBAPI.useSearchQuery({
			searchType,
			page,
			searchTerm,
			include_adult,
		});

	// Debouncing
	useEffect(() => {
		if (
			debouncedSearchTerm.length === 0 ||
			debouncedSearchTerm.length > 2
		) {
			setSearchTerm(debouncedSearchTerm);
		}
	}, [debouncedSearchTerm]);
	// Clear results if searchTerm has changed
	useEffect(() => {
		setPage(1);
		setCards([]);
	}, [searchTerm]);
	// Render of the last page
	useEffect(() => {
		if (data && data.total_pages === page)
			setCards([...cards, ...data.results]);
	}, [data]);
	// Lazy loading
	useObserver(lastElement, !isFetching, isLoading, () => {
		if (data && data.total_pages > page && data.total_results > 0) {
			console.log(data);
			console.log(isFetching);
			setCards([...cards, ...data.results]);
			setPage(page + 1);
		}
	});
	return (
		<div className={classes.SearchResultsWrapper}>
			<div className={classes.SearchResultsContainer}>
				{cards &&
					cards
						.filter(
							(item: ISearchResults) =>
								item.poster_path !== null &&
								item.backdrop_path !== null &&
								item.profile_path !== null
						)
						.map((item: any) => (
							<ResultItem key={item.id} item={item} />
						))}
				{/*{isLoading && <div>Loading...</div>}*/}
				<div ref={lastElement} />
			</div>
		</div>
	);
};

export default SearchResults;
