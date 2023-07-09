import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IFavoriteItem } from '../../models/IFavorites';
import { useActions } from '../../hooks/useActions';
import Card from '../../components/UI/Card/Card';

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
	);
};

export default AccountPage;
