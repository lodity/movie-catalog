import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import MovieCard from './UI/MovieCard/MovieCard';
import { useObserver } from '../hooks/useObserver';
import { movieAPI } from '../services/MovieService';
import CardPlaceholder from './UI/CardPlaceholder/CardPlaceholder';

interface Interface {
	method: any;
}

const MoviesContainer: FC<Interface> = ({ method }) => {
	const placeholder = [];
	for (let i = 0; i < 20; i++) {
		placeholder.push(<CardPlaceholder key={i} />);
	}
	const [cards, setCards]: any = useState([]);
	const [page, setPage] = useState(1);
	const [itemsCount, setItemsCount] = useState(0);

	const { data, isLoading, error } = method(1);

	let round = (a: number, b: number) => a - (a % b);

	useMemo(() => {
		if (data) {
			setItemsCount(round(data.total_results, 100) / 1000);
		}
	}, [data && data.total_results]);

	const lastElement = useRef<HTMLDivElement | null>(null);
	useObserver(lastElement, true, isLoading, () => {
		if (data) {
			setPage(page + 1);
			setCards([...cards, ...data.results]);
		}
	});
	console.log(isLoading);

	return (
		<div>
			<div className="movies__itemsCounter">{itemsCount}K Items</div>
			<div className="movies__area">
				<div className="movies__cards">
					{cards &&
						cards
							.filter((movie: any) => movie.poster_path !== null)
							.map((movie: any) => (
								<MovieCard key={movie.id} movie={movie} />
							))}
					{isLoading && placeholder}
				</div>
				<div
					ref={lastElement}
					style={{ height: 20, background: 'red' }}
				/>
			</div>
		</div>
	);
};

export default MoviesContainer;
