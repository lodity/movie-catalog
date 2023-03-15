import React, { FC } from 'react';
import { useParams } from 'react-router';
import { movieAPI } from '../services/MovieService';
import RatingButton from './UI/RatingButton/RatingButton';

const DetailsContent: FC = () => {
	const linkId = useParams();

	let movieId: number | string[] = linkId.id ? linkId.id.split('') : ['1'];
	movieId.shift();
	movieId = +movieId.join('');

	const { data, isLoading, error } = movieAPI.useMovieQuery(movieId);
	if (data) console.log(data);

	return (
		<div>
			{data && (
				<div className="details__content content-details">
					<div className="content-details__backdrop">
						<img
							src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
							alt="Backdrop"
						/>
					</div>
					<div className="content-details__title-block">
						<h1 className="content-details__title">{data.title}</h1>
					</div>
					<div className="content-details__main-block main-block">
						<div className="main-block__poster">
							<img
								src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
								alt="Poster"
							/>
						</div>
						<div className="main-block__info">
							{data.tagline && (
								<h2 className="main-block__tagline">
									{data.tagline}
								</h2>
							)}
							<p className="main-block__text">{data.overview}</p>
							<div className="main-block__ratingButton">
								<RatingButton
									vote_average={data.vote_average}
								/>
							</div>
							<div className="main-block__infoBlock">
								<div className="main-block__type">
									<p className="main-block__type-title infoTitle">
										Type
									</p>
									<p className="main-block__type-value infoValue">
										Type
									</p>
								</div>
								<div className="main-block__release">
									<p className="main-block__release-title infoTitle">
										Release Date:
									</p>
									<p className="main-block__release-value infoValue">
										{data.release_date}
									</p>
								</div>
								<div className="main-block__run-time">
									<p className="main-block__run-time-title infoTitle">
										Run time
									</p>
									<p className="main-block__run-time-value infoValue">
										{data.runtime} min
									</p>
								</div>
								<div className="main-block__genres">
									<p className="main-block__genres-title infoTitle">
										Genres
									</p>
									<p className="main-block__genres-value infoValue">
										{data.genres.map((object) => (
											<span key={object.id}>
												{object.name}
												{data.genres[
													data.genres.length - 1
												] != object
													? ', '
													: ''}
											</span>
										))}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DetailsContent;
