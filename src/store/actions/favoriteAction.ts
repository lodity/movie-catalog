import { IFavoriteItem } from '../../models/IFavorites';
import { Dispatch } from '@reduxjs/toolkit';
import {
	FavoriteAction,
	FavoriteActionTypes,
} from '../reducers/favoriteReducer';
import FavoriteService from '../../services/FavoriteService';

export const getFavorites = (userId: string) => {
	return async (dispatch: Dispatch<FavoriteAction>) => {
		try {
			const response = await FavoriteService.fetchFavorites(userId);
			console.log(response);
			dispatch({
				type: FavoriteActionTypes.getFavorites,
				payload: response.data,
			});
		} catch (e: any) {
			console.log(e.response?.data?.message);
		}
	};
};
export const addFavorites = (userId: string, favorites: IFavoriteItem[]) => {
	return async (dispatch: Dispatch<FavoriteAction>) => {
		try {
			const response = await FavoriteService.addFavorites(
				userId,
				favorites
			);
			console.log(response);
			dispatch({
				type: FavoriteActionTypes.addFavorites,
				payload: response.data.favorites,
			});
		} catch (e: any) {
			console.log(e.response?.data?.message);
		}
	};
};
export const removeFavoriteById = (userId: string, favoriteId: number) => {
	return async (dispatch: Dispatch<FavoriteAction>) => {
		try {
			const response = await FavoriteService.removeFavorite(
				userId,
				favoriteId
			);
			console.log(response);
			dispatch({
				type: FavoriteActionTypes.removeFavoriteById,
				payload: favoriteId,
			});
		} catch (e: any) {
			console.log(e.response?.data?.message);
		}
	};
};
// export const clearFavorites = (locally: boolean) => {
// 	return async (dispatch: Dispatch<FavoriteAction>) => {
// 		try {
// 			if(!locally){
// 				const response = await FavoriteService.removeFavorite(
// 					userId,
// 					favoriteId
// 				);
// 			}
//
// 			console.log(response);
// 			dispatch({
// 				type: FavoriteActionTypes.removeFavoriteById,
// 				payload: favoriteId,
// 			});
// 		} catch (e: any) {
// 			console.log(e.response?.data?.message);
// 		}
// 	};
// };
