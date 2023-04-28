import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICard } from '../models/ICard';

interface Genres {
	id: number;
	name: string;
}
interface IMovies {
	page: number;
	results: ICard[];
	total_pages: number;
	total_results: number;
}
interface IMovie {
	id: number;
	poster_path: string;
	backdrop_path: string;
	genres: Genres[];
	title: string;
	tagline: string;
	overview: string;
	vote_average: number;
	release_date: string;
	runtime: number;
}

export const theMovieDBAPI = createApi({
	reducerPath: 'theMovieDBAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3',
	}),
	endpoints: (build) => ({
		popularMovies: build.query<IMovies | undefined, number>({
			query: (page: number) => ({
				url: '/movie/popular',
				params: {
					api_key: '918026d985ab80afa1ae6f0b53c6aa70',
					page: page,
				},
			}),
		}),
		movie: build.query<IMovie | undefined, number>({
			query: (id: number) => ({
				url: `/movie/${id}`,
				params: {
					api_key: '918026d985ab80afa1ae6f0b53c6aa70',
				},
			}),
		}),
	}),
});
