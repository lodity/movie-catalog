import { useTypedSelector } from '../hooks/useTypedSelector';

const HomePage = () => {
	const { isAuthenticated, isLoading } = useTypedSelector(
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
