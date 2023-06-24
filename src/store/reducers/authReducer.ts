import IUser from '../../models/IUser';

export enum AuthActionTypes {
	setIsAuthenticated = 'setIsAuthenticated',
	setUser = 'setUser',
}

interface IAuthState {
	user: IUser;
	isAuthenticated: boolean;
}
interface SetIsAuthenticatedAction {
	type: AuthActionTypes.setIsAuthenticated;
	payload: boolean;
}
interface SetUserAction {
	type: AuthActionTypes.setUser;
	payload: IUser;
}
export type AuthAction = SetIsAuthenticatedAction | SetUserAction;

const initialState: IAuthState = {
	user: {} as IUser,
	isAuthenticated: false,
};

export const authReducer = (
	state = initialState,
	action: AuthAction
): IAuthState => {
	switch (action.type) {
		case AuthActionTypes.setIsAuthenticated:
			return { ...state, isAuthenticated: action.payload };
		case AuthActionTypes.setUser:
			return { ...state, user: action.payload };
		default: {
			return state;
		}
	}
};
