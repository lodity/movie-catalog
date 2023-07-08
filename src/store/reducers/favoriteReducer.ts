import { IFavoriteItem } from '../../models/IFavorites';

export enum FavoriteActionTypes {
	getFavorites = 'getFavorites',
	addFavorites = 'addFavorites',
	removeFavorites = 'removeFavorites',
}
interface GetFavorite {
	type: FavoriteActionTypes.getFavorites;
	payload: IFavoriteItem[];
}
interface AddFavorite {
	type: FavoriteActionTypes.addFavorites;
	payload: IFavoriteItem[];
}
interface RemoveFavorites {
	type: FavoriteActionTypes.removeFavorites;
	payload: number;
}
export type FavoriteAction = GetFavorite | AddFavorite | RemoveFavorites;

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
				favorites: [...state.favorites, ...action.payload],
			};
		case FavoriteActionTypes.removeFavorites:
			return {
				...state,
				favorites: state.favorites.filter(
					(favorite) => favorite.id !== action.payload
				),
			};
		default:
			return state;
	}
};
