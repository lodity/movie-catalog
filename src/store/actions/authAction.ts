import { AuthAction, AuthActionTypes } from '../reducers/authReducer';
import { Dispatch } from '@reduxjs/toolkit';
import AuthService from '../../services/AuthService';
import IUser from '../../models/IUser';
import axios from 'axios';
import AuthResponse from '../../models/AuthResponse';
import { API_URL } from '../../http';
import { AxiosResponse } from 'axios';

function setAuthData(
	dispatch: Dispatch<AuthAction>,
	response: AxiosResponse<AuthResponse>,
	setIsAuthenticated: boolean,
	setUser: IUser
) {
	if (response.data.accessToken) {
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
			const response = await axios.get<AuthResponse>(
				`${API_URL}/refresh`,
				{ withCredentials: true }
			);
			console.log(response);
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
