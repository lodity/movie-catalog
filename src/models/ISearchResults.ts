export interface ISearchResults {
	poster_path: string;
	backdrop_path: string;
	profile_path: string;
	adult: boolean;
	overview: string;
	id: number;
	media_type: 'movie' | 'tv' | 'person';
	title: string;
	name: string;
}
