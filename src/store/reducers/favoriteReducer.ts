import { IFavoriteItem } from '../../models/IFavorites';

export enum FavoriteActionTypes {
	getFavorites = 'getFavorites',
	addFavorites = 'addFavorites',
	removeFavoriteById = 'removeFavoriteById',
	clearFavorites = 'clearFavorites',
}
interface GetFavorite {
	type: FavoriteActionTypes.getFavorites;
	payload: IFavoriteItem[];
}
interface AddFavorite {
	type: FavoriteActionTypes.addFavorites;
	payload: IFavoriteItem[];
}
interface RemoveFavoriteById {
	type: FavoriteActionTypes.removeFavoriteById;
	payload: number;
}
interface ClearFavorites {
	type: FavoriteActionTypes.clearFavorites;
}
export type FavoriteAction =
	| GetFavorite
	| AddFavorite
	| RemoveFavoriteById
	| ClearFavorites;

interface IFavoriteState {
	favorites: IFavoriteItem[];
}
const initialState: IFavoriteState = {
	favorites: [],
};

export const favoriteReducer = (
	state = initialState,
	action: FavoriteAction
) => {
	switch (action.type) {
		case FavoriteActionTypes.getFavorites:
			return {
				...state,
				favorites: action.payload,
			};
		case FavoriteActionTypes.addFavorites:
			return {
				...state,
				favorites: action.payload,
			};
		case FavoriteActionTypes.removeFavoriteById:
			return {
				...state,
				favorites: state.favorites.filter(
					(favorite) => favorite.id !== action.payload
				),
			};
		case FavoriteActionTypes.clearFavorites:
			return {
				...state,
				favorites: [],
			};
		default:
			return state;
	}
};
