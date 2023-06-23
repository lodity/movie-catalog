import { ITestAction, TestActionTypes } from '../reducers/testReducer';
import { Dispatch } from '@reduxjs/toolkit';

export const increment = () => {
	return (dispatch: Dispatch<ITestAction>) => {
		dispatch({ type: TestActionTypes.INCREMENT });
	};
};
export const decrement = () => {
	return (dispatch: Dispatch<ITestAction>) => {
		dispatch({ type: TestActionTypes.DECREMENT });
	};
};
