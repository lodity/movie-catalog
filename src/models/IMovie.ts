export interface IMovies {
	page: number;
	results: INowPlayingCard[];
	total_pages: number;
	total_results: number;
	errorMessage: string;
	items: INowPlayingCard[];
}

export interface INowPlayingCard {
	title: string;
	id: number;
	overview: string;
	poster_path: string;
}
