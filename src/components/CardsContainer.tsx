import { FC, useEffect, useMemo, useRef, useState } from 'react';
import Card from './UI/Card/Card';
import { useObserver } from '../hooks/useObserver';
import CardPlaceholder from './UI/CardPlaceholder/CardPlaceholder';
import { ICard } from '../models/ICard';

interface Interface {
	method: Function;
}

const CardsContainer: FC<Interface> = ({ method }) => {
	const placeholder = [];
	for (let i = 0; i < 20; i++) {
		placeholder.push(<CardPlaceholder key={i} />);
	}
	const [cards, setCards] = useState<ICard[]>([]);
	const [page, setPage] = useState(1);
	const [itemsCount, setItemsCount] = useState(0);
	const [type, setType] = useState('');

	const { data, isFetching } = method(page);
	let round = (a: number, b: number) => a - (a % b);

	useEffect(() => {
		if (data) {
			setType(
				data.results[0].first_air_date === undefined ? 'movie' : 'tv'
			);
		}
	}, [data]);

	useMemo(() => {
		if (data) {
			setItemsCount(round(data.total_results, 100) / 1000);
		}
	}, [data]);

	const lastElement = useRef<HTMLDivElement | null>(null);
	useObserver(lastElement, true, isFetching, () => {
		if (data) {
			console.log(data);
			setPage(page + 1);
			const table: { [index: string]: any } = {};
			setCards(
				[...cards, ...data.results].filter(
					({ id }) => !table[id] && (table[id] = 1)
				)
			);
		}
	});
	return (
		<div>
			<div className="movies__itemsCounter">{itemsCount}K Items</div>
			<div className="movies__area">
				<ul className="movies__cards">
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
					{isFetching && placeholder}
				</ul>
				<div
					ref={lastElement}
					style={{ margin: '200px 0px', height: 20 }}
				/>
			</div>
		</div>
	);
};

export default CardsContainer;
