import { AxiosResponse } from 'axios';
import $api from '../http';
import { IFavoriteItem, IFavorites } from '../models/IFavorites';

export default class FavoriteService {
	static fetchFavorites(
		userId: string
	): Promise<AxiosResponse<IFavoriteItem[]>> {
		return $api.post<IFavoriteItem[]>('/getFavorite', { userId });
	}
	static addFavorites(
		userId: string,
		favorites: IFavoriteItem[]
	): Promise<AxiosResponse<IFavorites>> {
		return $api.post<IFavorites>('/addFavorite', {
			userId,
			favorites,
		});
	}
	static removeFavorite(
		userId: string,
		favoriteId: number
	): Promise<AxiosResponse<IFavorites>> {
		return $api.post<IFavorites>('/removeFavorite', {
			userId,
			favoriteId,
		});
	}
}
