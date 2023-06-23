import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import * as TestActions from '../store/actions/test';

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(TestActions, dispatch);
};
