import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import { theMovieDBAPI } from '../services/TheMovieDBService';
import { testReducer } from './reducers/testReducer';

const rootReducer = combineReducers({
	[theMovieDBAPI.reducerPath]: theMovieDBAPI.reducer,
	test: testReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(theMovieDBAPI.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
