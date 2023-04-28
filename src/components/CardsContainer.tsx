import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import Card from './UI/Card/Card';
import { useObserver } from '../hooks/useObserver';
import CardPlaceholder from './UI/CardPlaceholder/CardPlaceholder';

interface Interface {
	method: Function;
}

const CardsContainer: FC<Interface> = ({ method }) => {
	const placeholder = [];
	for (let i = 0; i < 20; i++) {
		placeholder.push(<CardPlaceholder key={i} />);
	}
	const [cards, setCards]: any = useState([]);
	const [page, setPage] = useState(1);
	const [itemsCount, setItemsCount] = useState(0);
	const [type, setType] = useState('');

	const { data, isLoading, error } = method(page);
	let round = (a: number, b: number) => a - (a % b);

	useEffect(() => {
		if (data) {
			setType(
				data.results[0].first_air_date == undefined
					? 'Movie'
					: 'TV serial'
			);
		}
	}, [isLoading]);

	useMemo(() => {
		if (data) {
			setItemsCount(round(data.total_results, 100) / 1000);
		}
	}, [data && data.total_results]);

	const lastElement = useRef<HTMLDivElement | null>(null);
	useObserver(lastElement, true, isLoading, () => {
		if (data) {
			console.log(data);
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
							.filter(
								(item: any) =>
									item.poster_path !== null &&
									item.backdrop_path !== null
							)
							.map((item: any) => (
								<Card key={item.id} movie={item} type={type} />
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

export default CardsContainer;
