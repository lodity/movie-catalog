import { FC, useRef } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ICard } from '../../../models/ICard';
import { IFavoriteItem } from '../../../models/IFavorites';
import classes from './ButtonAddFavorite.module.css';

interface Interface {
	movie: ICard | IFavoriteItem;
	type: string;
}
const ButtonAddFavorite: FC<Interface> = ({ movie, type }) => {
	const { addFavorites, removeFavoriteById } = useActions();
	const { user } = useTypedSelector((state) => state.auth);
	const { favorites } = useTypedSelector((state) => state.favorite);
	const refFavoriteButton = useRef<HTMLButtonElement>(null);

	return (
		<button
			onClick={() => {
				if (
					!refFavoriteButton?.current?.classList.contains(
						classes.favoriteActive
					)
				)
					addFavorites(user.id, [{ ...movie, media_type: type }]);
				else removeFavoriteById(user.id, movie.id);
			}}
			ref={refFavoriteButton}
			className={`${classes.favorite} ${
				favorites.filter((item) => item.id === movie.id).length &&
				classes.favoriteActive
			}`}
		/>
	);
};

export default ButtonAddFavorite;
