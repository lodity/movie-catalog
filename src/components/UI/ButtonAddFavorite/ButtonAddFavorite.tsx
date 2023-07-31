import { FC, useRef } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ICard } from '../../../models/ICard';
import { IFavoriteItem } from '../../../models/IFavorites';
import classes from './ButtonAddFavorite.module.css';
import { IDetailsMovie, IDetailsTV } from '../../../services/TheMovieDBService';

interface Interface {
	movie: ICard | IFavoriteItem | IDetailsMovie | IDetailsTV;
	type: string;
	place: string;
}
const ButtonAddFavorite: FC<Interface> = ({ movie, type, place }) => {
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
				) {
					addFavorites(user.id, [
						{
							...movie,
							original_title:
								'original_name' in movie
									? movie.original_name
									: movie.original_title,
							title: 'name' in movie ? movie.name : movie.title,
							media_type: type,
						},
					]);
				} else removeFavoriteById(user.id, movie.id);
			}}
			ref={refFavoriteButton}
			className={`${classes.favorite} ${
				place === 'details'
					? classes.favoriteDetails
					: classes.favoriteCard
			} ${
				favorites.filter((item) => item.id === movie.id).length &&
				classes.favoriteActive
			}`}
		/>
	);
};

export default ButtonAddFavorite;
