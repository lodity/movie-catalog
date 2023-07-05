import React, { useEffect, useState } from 'react';
import FavoriteService from '../../services/FavoriteService';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IFavoriteItem } from '../../models/IFavorites';

const AccountPage = () => {
	const { user } = useTypedSelector((state) => state.auth);
	const [favorites, setFavorites] = useState<IFavoriteItem[]>([]);

	useEffect(() => {
		getFavorites();
	}, []);
	async function getFavorites() {
		const response = await FavoriteService.fetchFavorites(
			user.id.toString()
		);
		setFavorites(response.data);
	}
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
