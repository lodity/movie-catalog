import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import Movies from '../pages/Movies';

interface Route {
	path: string;
	element: JSX.Element;
}

// export const privateRoutes: Route[] = [
// 	{ path: '/', element: HomePage },
// 	{ path: '/posts', element: Movies },
// 	// // { path: '/posts/:id', element: <PostIdPage /> },
// 	// { path: '*', element: <HomePage /> },
// ];
export const privateRoutes: Route[] = [
	{ path: '/', element: <HomePage /> },
	{ path: '/movies', element: <Movies /> },
	{ path: '*', element: <NotFoundPage /> },
	// // { path: '/posts/:id', element: <PostIdPage /> },
	// { path: '*', element: <HomePage /> },
];
