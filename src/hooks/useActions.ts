import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import * as AuthActions from '../store/actions/authAction';
import * as FavoriteActions from '../store/actions/favoriteAction';

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators({ ...AuthActions, ...FavoriteActions }, dispatch);
};
