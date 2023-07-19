import axios from 'axios';
import AuthResponse from '../models/AuthResponse';

export const SERVER_URL = 'http://localhost:5000';

const $api = axios.create({
	withCredentials: true,
	baseURL: SERVER_URL + '/api',
});

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});

$api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const originalRequest = error.config;
		if (
			error.response.status === 401 &&
			error.config &&
			!error.config._retry
		) {
			originalRequest._retry = true;
			try {
				const response = await axios.get<AuthResponse>(
					`${SERVER_URL}/refresh`,
					{ withCredentials: true }
				);
				localStorage.setItem('token', response.data.accessToken);
				return $api.request(originalRequest);
			} catch (e) {
				console.log('UNAUTHORIZED');
			}
		}
		throw error;
	}
);

export default $api;
