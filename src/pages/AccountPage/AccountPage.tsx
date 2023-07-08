import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IFavoriteItem } from '../../models/IFavorites';
import { useActions } from '../../hooks/useActions';

const AccountPage = () => {
	const { getFavorites } = useActions();
	const { user } = useTypedSelector((state) => state.auth);
	const { favorites: favoritesState } = useTypedSelector(
		(state) => state.favorite
	);
	const [favorites, setFavorites] = useState<IFavoriteItem[]>([]);

	useEffect(() => {
		getFavorites(user.id);
	}, []);
	useEffect(() => {
		setFavorites(favoritesState);
	}, [favoritesState]);
	return (
		<ul>
			{favorites.map((item) => (
				<li key={item.id}>
					{item.id}. <p>{item.title}</p>
				</li>
			))}
		</ul>
	);
};

export default AccountPage;
