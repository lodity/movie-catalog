import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { INowPlayingCard, IMovies } from '../models/IMovie';

export const movieAPI = createApi({
	reducerPath: 'movieAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3',
	}),
	endpoints: (build) => ({
		popularMovies: build.query<IMovies, number>({
			query: (page: number = 2) => ({
				url: '/movie/popular',
				params: {
					api_key: '918026d985ab80afa1ae6f0b53c6aa70',
					page: page,
				},
			}),
		}),
	}),
});
