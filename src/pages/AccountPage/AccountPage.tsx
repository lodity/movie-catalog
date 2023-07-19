import { useEffect, useRef, useState } from 'react';
import classes from './AccountPage.module.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IFavoriteItem } from '../../models/IFavorites';
import { useActions } from '../../hooks/useActions';
import Card from '../../components/UI/Card/Card';
import BaseButton from '../../components/UI/BaseButton/BaseButton';
import UserService from '../../services/UserService';
import { SERVER_URL } from '../../http';

const AccountPage = () => {
	const { getFavorites, clearFavorites, changeAvatar } = useActions();
	const { user, isLoading } = useTypedSelector((state) => state.auth);
	const { favorites: favoritesState } = useTypedSelector(
		(state) => state.favorite
	);
	const [favorites, setFavorites] = useState<IFavoriteItem[]>([]);
	const hiddenFileInput = useRef<HTMLInputElement>(null);

	async function getUsers() {
		console.log(await UserService.fetchUsers());
	}
	const handleClick = () => {
		hiddenFileInput.current?.click();
	};
	const handleChange = async (event: any) => {
		const fileUploaded = event.target.files[0];
		const formData = new FormData();
		formData.append('avatar', fileUploaded);
		formData.append('userId', user.id);
		changeAvatar(formData);
	};

	useEffect(() => {
		getFavorites(user.id);
	}, []);
	useEffect(() => {
		setFavorites(favoritesState);
	}, [favoritesState]);

	return (
		<>
			{isLoading && <p>Loading...</p>}

			<div className={classes.container}>
				<button onClick={handleClick} className={classes.avatarButton}>
					<img
						src={`${SERVER_URL}/${user.avatarLink}`}
						alt="Avatar"
						className={classes.avatar}
					/>
				</button>
				<input
					type="file"
					accept="image/*"
					ref={hiddenFileInput}
					onChange={handleChange}
					className={classes.hiddenFileInput}
				/>
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

			<ul className={classes.cardList}>
				{favorites.map((item) => (
					<Card type={item.media_type} movie={item} key={item.id} />
				))}
			</ul>
		</>
	);
};

export default AccountPage;
