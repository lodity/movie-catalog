import { AuthAction, AuthActionTypes } from '../reducers/authReducer';
import { Dispatch } from '@reduxjs/toolkit';
import AuthService from '../../services/AuthService';
import IUser from '../../models/IUser';
import axios, { AxiosResponse } from 'axios';
import AuthResponse from '../../models/AuthResponse';
import { SERVER_URL } from '../../http';
import UserService from '../../services/UserService';

function setAuthData(
	dispatch: Dispatch<AuthAction>,
	response: AxiosResponse<AuthResponse> | null,
	setIsAuthenticated: boolean,
	setUser: IUser
) {
	if (response && response.data.accessToken) {
		localStorage.setItem('token', response.data.accessToken);
	} else {
		localStorage.removeItem('token');
	}
	dispatch({
		type: AuthActionTypes.setIsAuthenticated,
		payload: setIsAuthenticated,
	});
	dispatch({
		type: AuthActionTypes.setUser,
		payload: setUser,
	});
	localStorage.setItem('isAuthenticated', setIsAuthenticated.toString());
	localStorage.setItem('user', JSON.stringify(setUser));
}

export const login = (usernameOrEmail: string, password: string) => {
	return async (dispatch: Dispatch<AuthAction>) => {
		dispatch({
			type: AuthActionTypes.setIsLoading,
			payload: true,
		});
		try {
			const response = await AuthService.login(usernameOrEmail, password);
			setAuthData(dispatch, response, true, response.data.user);
		} catch (e: any) {
			console.log(e.response?.data?.message);
		} finally {
			dispatch({
				type: AuthActionTypes.setIsLoading,
				payload: false,
			});
		}
	};
};
export const registration = (
	username: string,
	email: string,
	password: string
) => {
	return async (dispatch: Dispatch<AuthAction>) => {
		dispatch({
			type: AuthActionTypes.setIsLoading,
			payload: true,
		});
		try {
			const response = await AuthService.registration(
				username,
				email,
				password
			);
			setAuthData(dispatch, response, true, response.data.user);
		} catch (e: any) {
			console.log(e.response?.data?.message);
		} finally {
			dispatch({
				type: AuthActionTypes.setIsLoading,
				payload: false,
			});
		}
	};
};
export const logout = () => {
	return async (dispatch: Dispatch<AuthAction>) => {
		try {
			const response = await AuthService.logout();
			setAuthData(dispatch, response, false, {} as IUser);
		} catch (e: any) {
			console.log(e.response?.data?.message);
		}
	};
};

export const checkAuth = () => {
	return async (dispatch: Dispatch<AuthAction>) => {
		dispatch({
			type: AuthActionTypes.setIsLoading,
			payload: true,
		});
		try {
			await axios.get(`${SERVER_URL}/api/checkAuth`, {
				withCredentials: true,
			});
		} catch (e: any) {
			console.log(e.response?.data?.message);
			setAuthData(dispatch, null, false, {} as IUser);
		} finally {
			dispatch({
				type: AuthActionTypes.setIsLoading,
				payload: false,
			});
		}
	};
};
export const changeAvatar = (formData: FormData) => {
	return async (dispatch: Dispatch<AuthAction>) => {
		dispatch({
			type: AuthActionTypes.setIsLoading,
			payload: true,
		});
		try {
			const response = await UserService.changeAvatar(formData);
			console.log(response.data);
			dispatch({
				type: AuthActionTypes.setUser,
				payload: response.data,
			});
		} catch (e: any) {
			console.log(e.response?.data?.message);
		} finally {
			dispatch({
				type: AuthActionTypes.setIsLoading,
				payload: false,
			});
		}
	};
};
