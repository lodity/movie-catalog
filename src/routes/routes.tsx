import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import DetailsPage from '../pages/DetailsPage';

interface Route {
	path: string;
	element: JSX.Element;
}

export const privateRoutes: Route[] = [
	{ path: '/', element: <HomePage /> },
	{ path: '/movies', element: <MoviesPage /> },
	{ path: '*', element: <NotFoundPage /> },
	{ path: '/:type/:id', element: <DetailsPage /> },
];
