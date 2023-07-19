import $api from '../http';
import { AxiosResponse } from 'axios';
import IUser from '../models/IUser';

export default class UserService {
	static changeAvatar(data: any): Promise<AxiosResponse<IUser>> {
		return $api.put('/changeAvatar', data);
	}
	static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
		return $api.get('/users');
	}
}
