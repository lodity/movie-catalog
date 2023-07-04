import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes/routes';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouter = () => {
	const { isAuthenticated } = useTypedSelector((state) => state.auth);

	return (
		<Routes>
			{isAuthenticated
				? privateRoutes.map((route) => (
						<Route
							key={route.element.toString()}
							path={route.path}
							element={route.element}
						/>
				  ))
				: publicRoutes.map((route) => (
						<Route
							key={route.element.toString()}
							path={route.path}
							element={route.element}
						/>
				  ))}
		</Routes>
	);
};

export default AppRouter;
