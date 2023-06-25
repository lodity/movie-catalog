import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const HomePage = () => {
	const { isAuthenticated, user } = useTypedSelector((state) => state.auth);
	return (
		<>
			<h1>Hello</h1>
			<p>
				{isAuthenticated
					? 'You are authenticated'
					: 'You are not authenticated'}
			</p>
			{isAuthenticated && <p>Welcome back {user.username}!</p>}
		</>
	);
};

export default HomePage;
