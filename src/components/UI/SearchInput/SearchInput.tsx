import React, { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';
import classes from './SearchInput.module.css';
import SearchResults from './SearchResults/SearchResults';
import { useDebounce } from '../../../hooks/useDebounce';

export type SearchType = 'multi' | 'movie' | 'tv';
interface Interface {
	classUi: string;
	searchType: SearchType;
}

const SearchInput: FC<Interface> = ({ classUi, searchType }) => {
	// const [cards, setCards]: any = useState([]);
	// const [page, setPage] = useState(1);
	// const [include_adult, setInclude_adult] = useState(false);
	// const [searchTerm, setSearchTerm] = useState('');
	// const debouncedSearchTerm = useDebounce(searchTerm, 500);
	//
	// const { data, isLoading, error } = theMovieDBAPI.useSearchQuery({
	// 	searchType,
	// 	page,
	// 	searchTerm,
	// 	include_adult,
	// });
	// const [filteredSearchTerm, setFilteredSearchTerm] = useState(searchTerm);
	//
	// useEffect(() => {
	// 	if (searchTerm.length === 0 || searchTerm.length > 4) {
	// 		setFilteredSearchTerm(searchTerm);
	// 	}
	// }, [searchTerm]);
	//
	// const results = data?.results ?? [];
	// console.log(results);

	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	return (
		<div className={`${classes.searchInputContainer} ${classUi}`}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
					stroke="#475069"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M22 22L20 20"
					stroke="#475069"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<input
				value={searchTerm}
				onInput={(e: ChangeEvent<HTMLInputElement>) =>
					setSearchTerm(e.target.value)
				}
				type="text"
				placeholder="Search MoviesPage or TV Shows"
				className={classes.searchInput}
			/>
			<SearchResults
				searchType={searchType}
				debouncedSearchTerm={debouncedSearchTerm}
			/>
		</div>
	);
};

export default SearchInput;
