import { AxiosResponse } from 'axios';
import $api from '../http';
import { IFavoriteItem } from '../models/IFavorites';

export default class FavoriteService {
	static fetchFavorites(
		userId: string
	): Promise<AxiosResponse<IFavoriteItem[]>> {
		return $api.post<IFavoriteItem[]>('/getFavorite', { userId });
	}
}
