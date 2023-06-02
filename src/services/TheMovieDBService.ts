import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { SearchType } from '../components/UI/SearchInput/SearchInput';
import { ISearchResults } from '../models/ISearchResults';

interface IGenres {
	id: number;
	name: string;
}
export interface ISearchResponse {
	page: number;
	results: ISearchResults[];
	total_pages: number;
	total_results: number;
}
interface IDetails {
	id: number;
	poster_path: string;
	backdrop_path: string;
	genres: IGenres[];
	title: string;
	name: string;
	tagline: string;
	overview: string;
	vote_average: number;
	release_date: string;
	runtime: number;
	status: string;
	first_air_date: string;
	last_air_date: string;
	number_of_seasons: number;
	number_of_episodes: number;
	episode_run_time: number[];
}
interface ISearchArgs {
	searchType: SearchType;
	searchTerm: string;
	page: number;
	include_adult: boolean;
}
const API_KEY: string = '918026d985ab80afa1ae6f0b53c6aa70';

export const theMovieDBAPI = createApi({
	reducerPath: 'theMovieDBAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3',
	}),
	endpoints: (build) => ({
		popularMovies: build.query<ISearchResponse | undefined, number>({
			query: (page: number) => ({
				url: '/movie/popular',
				params: {
					api_key: API_KEY,
					page: page,
				},
			}),
		}),
		movie: build.query<IDetails | undefined, number>({
			query: (id: number) => ({
				url: `/movie/${id}`,
				params: {
					api_key: API_KEY,
				},
			}),
		}),
		tv: build.query<IDetails | undefined, number>({
			query: (id: number) => ({
				url: `/tv/${id}`,
				params: {
					api_key: API_KEY,
				},
			}),
		}),
		search: build.query<ISearchResponse | undefined, ISearchArgs>({
			query: ({ searchType, searchTerm, page, include_adult }) => ({
				url: `/search/${searchType}`,
				params: {
					api_key: API_KEY,
					query: searchTerm,
					page: page,
					include_adult: include_adult,
				},
			}),
		}),
	}),
});
