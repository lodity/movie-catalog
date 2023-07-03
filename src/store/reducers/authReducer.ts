import IUser from '../../models/IUser';

export enum AuthActionTypes {
	setIsAuthenticated = 'setIsAuthenticated',
	setIsLoading = 'setIsLoading',
	setUser = 'setUser',
}

interface IAuthState {
	user: IUser;
	isAuthenticated: boolean;
	isLoading: boolean;
}
interface SetIsAuthenticatedAction {
	type: AuthActionTypes.setIsAuthenticated;
	payload: boolean;
}
interface SetIsLoading {
	type: AuthActionTypes.setIsLoading;
	payload: boolean;
}
interface SetUserAction {
	type: AuthActionTypes.setUser;
	payload: IUser;
}
export type AuthAction =
	| SetIsAuthenticatedAction
	| SetIsLoading
	| SetUserAction;

const initialState: IAuthState = {
	user: JSON.parse(localStorage.getItem('user') || '{}') as IUser,
	isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
	isLoading: false,
};

export const authReducer = (
	state = initialState,
	action: AuthAction
): IAuthState => {
	switch (action.type) {
		case AuthActionTypes.setIsAuthenticated:
			return { ...state, isAuthenticated: action.payload };
		case AuthActionTypes.setIsLoading:
			return { ...state, isLoading: action.payload };
		case AuthActionTypes.setUser:
			return { ...state, user: action.payload };
		default: {
			return state;
		}
	}
};
