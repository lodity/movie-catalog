import { AuthAction, AuthActionTypes } from '../reducers/authReducer';
import { Dispatch } from '@reduxjs/toolkit';
import AuthService from '../../services/AuthService';
import IUser from '../../models/IUser';
import axios from 'axios';
import AuthResponse from '../../models/AuthResponse';
import { API_URL } from '../../http';

export const login = (usernameOrEmail: string, password: string) => {
	return async (dispatch: Dispatch<AuthAction>) => {
		try {
			const response = await AuthService.login(usernameOrEmail, password);
			localStorage.setItem('token', response.data.accessToken);
			dispatch({
				type: AuthActionTypes.setIsAuthenticated,
				payload: true,
			});
			dispatch({
				type: AuthActionTypes.setUser,
				payload: response.data.user,
			});
		} catch (e: any) {
			console.log(e.response?.data?.message);
		}
	};
};
export const registration = (
	username: string,
	email: string,
	password: string
) => {
	return async (dispatch: Dispatch<AuthAction>) => {
		try {
			const response = await AuthService.registration(
				username,
				email,
				password
			);
			localStorage.setItem('token', response.data.accessToken);
			dispatch({
				type: AuthActionTypes.setIsAuthenticated,
				payload: true,
			});
			dispatch({
				type: AuthActionTypes.setUser,
				payload: response.data.user,
			});
		} catch (e: any) {
			console.log(e.response?.data?.message);
		}
	};
};
export const logout = () => {
	return async (dispatch: Dispatch<AuthAction>) => {
		try {
			const response = await AuthService.logout();
			localStorage.removeItem('token');
			dispatch({
				type: AuthActionTypes.setIsAuthenticated,
				payload: false,
			});
			dispatch({
				type: AuthActionTypes.setUser,
				payload: {} as IUser,
			});
		} catch (e: any) {
			console.log(e.response?.data?.message);
		}
	};
};

export const checkAuth = () => {
	return async (dispatch: Dispatch<AuthAction>) => {
		try {
			const response = await axios.get<AuthResponse>(
				`${API_URL}/refresh`,
				{ withCredentials: true }
			);
			console.log(response);
			localStorage.setItem('token', response.data.accessToken);
			dispatch({
				type: AuthActionTypes.setIsAuthenticated,
				payload: true,
			});
			dispatch({
				type: AuthActionTypes.setUser,
				payload: response.data.user,
			});
		} catch (e: any) {
			console.log(e.response?.data?.message);
		}
	};
};
