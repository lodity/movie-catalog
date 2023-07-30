import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import DetailsPage from '../pages/DetailsPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import { Navigate } from 'react-router-dom';
import AccountPage from '../pages/AccountPage/AccountPage';
import TVPage from '../pages/TVPage/TVPage';

interface Route {
	path: string;
	element: JSX.Element;
}

export const privateRoutes: Route[] = [
	{ path: '/', element: <HomePage /> },
	{ path: '/account', element: <AccountPage /> },
	{ path: '/login', element: <Navigate to="/" /> },
	{
		path: '/registration',
		element: <Navigate to="/" />,
	},
	{ path: '/movies', element: <MoviesPage /> },
	{ path: '/tv', element: <TVPage /> },
	{ path: '*', element: <NotFoundPage /> },
	{ path: '/:type/:id', element: <DetailsPage /> },
];
export const publicRoutes = [
	{ path: '/movies', element: <MoviesPage /> },
	{ path: '/tv', element: <TVPage /> },
	{ path: '/login', element: <SignInPage signInOption="login" /> },
	{
		path: '/registration',
		element: <SignInPage signInOption="registration" />,
	},
	{ path: '*', element: <Navigate to="/login" /> },
];
