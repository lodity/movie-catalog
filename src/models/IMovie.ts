export interface IMovies {
	page: number;
	results: INowPlayingCard[];
	total_pages: number;
	total_results: number;
}

export interface INowPlayingCard {
	title: string;
	id: number;
	vote_average: number;
	overview: string;
	poster_path: string;
}
