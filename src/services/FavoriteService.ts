import { AxiosResponse } from 'axios';
import $api from '../http';
import { IFavoriteItem, IFavorites } from '../models/IFavorites';

export default class FavoriteService {
	static fetchFavorites(
		userId: string
	): Promise<AxiosResponse<IFavoriteItem[]>> {
		return $api.get<IFavoriteItem[]>('/getFavorite', {
			params: { userId },
		});
	}
	static addFavorites(
		userId: string,
		favorites: IFavoriteItem[]
	): Promise<AxiosResponse<IFavorites>> {
		return $api.patch<IFavorites>(
			'/addFavorite',
			{ favorites },
			{
				params: { userId },
			}
		);
	}
	static removeFavoriteById(
		userId: string,
		favoriteId: number
	): Promise<AxiosResponse<IFavorites>> {
		return $api.delete<IFavorites>('/removeFavorite', {
			params: {
				userId,
				favoriteId,
			},
		});
	}
	static clearFavorites(userId: string): Promise<AxiosResponse<IFavorites>> {
		return $api.delete<IFavorites>('/clearFavorite', {
			params: {
				userId,
			},
		});
	}
}
