import { useTypedSelector } from '../hooks/useTypedSelector';
import BaseButton from '../components/UI/BaseButton/BaseButton';
import UserService from '../services/UserService';
import { useActions } from '../hooks/useActions';

const HomePage = () => {
	const { clearFavorites } = useActions();
	const { isAuthenticated, isLoading, user } = useTypedSelector(
		(state) => state.auth
	);

	async function getUsers() {
		console.log(await UserService.fetchUsers());
	}

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
			<BaseButton onClick={getUsers}>getUsers</BaseButton>
			<BaseButton onClick={() => clearFavorites(user.id, false)}>
				clearFavorites
			</BaseButton>
			{authInformation}
		</>
	);
};

export default HomePage;
