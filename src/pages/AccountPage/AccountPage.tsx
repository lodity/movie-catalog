import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IFavoriteItem } from '../../models/IFavorites';
import { useActions } from '../../hooks/useActions';
import Card from '../../components/UI/Card/Card';
import BaseButton from '../../components/UI/BaseButton/BaseButton';
import UserService from '../../services/UserService';

const AccountPage = () => {
	const { getFavorites } = useActions();
	const { clearFavorites } = useActions();
	const { user, isLoading } = useTypedSelector((state) => state.auth);
	const { favorites: favoritesState } = useTypedSelector(
		(state) => state.favorite
	);
	const [favorites, setFavorites] = useState<IFavoriteItem[]>([]);

	async function getUsers() {
		console.log(await UserService.fetchUsers());
	}

	useEffect(() => {
		getFavorites(user.id);
	}, []);
	useEffect(() => {
		setFavorites(favoritesState);
	}, [favoritesState]);
	return (
		<>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div
					style={{
						margin: '0 auto',
						display: 'flex',
						flexDirection: 'column',
						flexWrap: 'wrap',
						gap: '15px',
						alignItems: 'center',
					}}
				>
					<p>Welcome back {user.username}!</p>
					<p>
						{user.isActivated
							? 'Account is activated'
							: 'Activation link has been sent to your email'}
					</p>

					<BaseButton onClick={getUsers}>getUsers</BaseButton>
					<BaseButton onClick={() => clearFavorites(user.id, false)}>
						clearFavorites
					</BaseButton>
				</div>
			)}

			<ul
				style={{
					margin: '0 auto',
					width: '85%',
					display: 'flex',
					flexWrap: 'wrap',
					gap: '15px',
					justifyContent: 'center',
				}}
			>
				{favorites.map((item) => (
					<Card type={item.media_type} movie={item} key={item.id} />
				))}
			</ul>
		</>
	);
};

export default AccountPage;
