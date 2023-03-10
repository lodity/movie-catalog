import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes } from '../routes/routes';

const AppRouter = () => {
	//console.log(privateRoutes);
	return (
		<Routes>
			{privateRoutes.map((route) => (
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
