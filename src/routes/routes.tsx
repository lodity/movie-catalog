import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import DetailsPage from '../pages/DetailsPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import { Navigate } from 'react-router-dom';

interface Route {
	path: string;
	element: JSX.Element;
}

export const privateRoutes: Route[] = [
	{ path: '/', element: <HomePage /> },
	{ path: '/login', element: <Navigate to="/" /> },
	{
		path: '/registration',
		element: <Navigate to="/" />,
	},
	{ path: '/movies', element: <MoviesPage /> },
	{ path: '*', element: <NotFoundPage /> },
	{ path: '/:type/:id', element: <DetailsPage /> },
];
export const publicRoutes = [
	{ path: '/login', element: <SignInPage signInOption="login" /> },
	{
		path: '/registration',
		element: <SignInPage signInOption="registration" />,
	},
	{ path: '*', element: <Navigate to="/login" /> },
];
