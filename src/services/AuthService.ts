import { AxiosResponse } from 'axios';
import $api from '../http';
import AuthResponse from '../models/AuthResponse';

export default class AuthService {
	static login(
		usernameOrEmail: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/login', { usernameOrEmail, password });
	}
	static registration(
		username: string,
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/registration', {
			username,
			email,
			password,
		});
	}

	static logout(): Promise<void> {
		return $api.post('/logout');
	}
}
