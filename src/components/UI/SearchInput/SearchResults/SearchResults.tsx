import { FC, useEffect, useRef, useState } from 'react';
import { theMovieDBAPI } from '../../../../services/TheMovieDBService';
import { SearchType } from '../SearchInput';
import classes from './SearchResults.module.css';
import ResultItem from './ResultItem/ResultItem';
import { useObserver } from '../../../../hooks/useObserver';
import { ISearchResults } from '../../../../models/ISearchResults';
interface Interface {
	searchType: SearchType;
	include_adult: boolean;
	originalSearchTerm: string;
	debouncedSearchTerm: string;
}
const SearchResults: FC<Interface> = ({
	searchType,
	include_adult,
	originalSearchTerm,
	debouncedSearchTerm,
}) => {
	const [cards, setCards]: any = useState([]);
	const [page, setPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState(debouncedSearchTerm);
	const [isNewSearchTerm, setIsNewSearchTerm] = useState(false);
	const lastElement = useRef<HTMLDivElement | null>(null);
	const [isObserverLoading, setIsObserverLoading] = useState(false);
	// API request
	const {
		data: searchResult,
		error,
		isFetching,
	} = theMovieDBAPI.useSearchQuery({
		searchType,
		page,
		searchTerm,
		include_adult,
	});

	useEffect(() => {
		if (error) {
			console.log(error);
		}
	}, [error]);

	// Debouncing
	useEffect(() => {
		if (
			debouncedSearchTerm.length === 0 ||
			debouncedSearchTerm.length > 2
		) {
			setSearchTerm(debouncedSearchTerm);
			setIsNewSearchTerm(true);
		}
	}, [debouncedSearchTerm]);
	// Clear results if searchTerm has changed
	useEffect(() => {
		setPage(1);
		setCards([]);
		setIsNewSearchTerm(false);
	}, [originalSearchTerm]);

	console.log(page, cards, isNewSearchTerm);
	// Render of the last page
	useEffect(() => {
		if (searchResult && searchResult.total_pages >= page)
			setCards([...cards, ...searchResult.results]);
		setIsObserverLoading(false);
		console.log(searchResult);
	}, [searchResult]);

	// Lazy loading
	useObserver(
		lastElement,
		isNewSearchTerm && !isFetching,
		isObserverLoading,
		() => {
			setIsObserverLoading(true);
			if (
				searchResult &&
				searchResult.total_pages > page &&
				searchResult.total_results > 0
			) {
				console.log(searchResult);
				console.log(page, searchResult.total_pages);
				setPage(page + 1);
			}
		}
	);
	return (
		<div className={classes.SearchResultsWrapper}>
			<div className={classes.SearchResultsContainer}>
				{cards
					.filter(
						(item: ISearchResults) =>
							item.poster_path !== null &&
							item.backdrop_path !== null &&
							item.profile_path !== null
					)
					.map((item: any) => (
						<ResultItem key={item.id} item={item} />
					))}
				{cards.length === 0 && isNewSearchTerm && !isFetching && (
					<p style={{ textAlign: 'center' }}>No results</p>
				)}
				{/*{isLoading && <div>Loading...</div>}*/}
				<div ref={lastElement} />
			</div>
		</div>
	);
};

export default SearchResults;
