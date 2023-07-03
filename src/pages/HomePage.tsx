import { useTypedSelector } from '../hooks/useTypedSelector';

const HomePage = () => {
	const { isAuthenticated, isLoading, user } = useTypedSelector(
		(state) => state.auth
	);

	let authInformation;
	if (isLoading) {
		authInformation = <p>Loading...</p>;
	} else {
		authInformation = (
			<>
				<p>
					{isAuthenticated
						? 'You are authenticated'
						: 'You are not authenticated'}
				</p>
				{isAuthenticated && (
					<>
						<p>Welcome back {user.username}!</p>
						<p>
							{user.isActivated
								? 'Account is activated'
								: 'Activation link has been sent to your email'}
						</p>
					</>
				)}
			</>
		);
	}

	return (
		<>
			<h1>Hello</h1>
			{authInformation}
		</>
	);
};

export default HomePage;
