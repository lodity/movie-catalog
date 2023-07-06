import React, { FC } from 'react';
import { useParams } from 'react-router';
import { theMovieDBAPI } from '../services/TheMovieDBService';
import RatingButton from './UI/RatingButton/RatingButton';

const DetailsContent: FC = () => {
	const linkId = useParams();
	let type: string = linkId.type ? linkId.type : '';
	let id: number = linkId.id ? parseInt(linkId.id) : 0;
	const { data } =
		type === 'movie'
			? theMovieDBAPI.useMovieQuery(id)
			: theMovieDBAPI.useTvQuery(id);
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
						<h1 className="content-details__title">
							{type === 'movie' ? data.title : data.name}
						</h1>
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
								<div className="main-block__left_right">
									<div className="main-block__left">
										<div className="main-block__type">
											<p className="main-block__type-title infoTitle">
												Type
											</p>
											<p className="main-block__type-value infoValue">
												{type.charAt(0).toUpperCase() +
													type.slice(1)}
											</p>
										</div>
										<div className="main-block__release">
											<p className="main-block__release-title infoTitle">
												{type === 'movie'
													? 'Release Date'
													: 'First air date'}
											</p>
											<p className="main-block__release-value infoValue">
												{type === 'movie'
													? data.release_date
													: data.first_air_date}
											</p>
										</div>
										{type === 'tv' && (
											<div className="main-block__seasons_num">
												<p className="main-block__seasons-title infoTitle">
													No. of Seasons
												</p>
												<p className="main-block__seasons-value infoValue">
													{data.number_of_seasons}
												</p>
											</div>
										)}
										<div className="main-block__run-time">
											<p className="main-block__run-time-title infoTitle">
												{type === 'movie'
													? 'Run time'
													: 'Episode run time'}
											</p>
											<p className="main-block__run-time-value infoValue">
												{type === 'movie'
													? data.runtime
													: data.episode_run_time}{' '}
												min
											</p>
										</div>
									</div>

									{type === 'tv' && (
										<div className="main-block__right">
											<div className="main-block__status">
												<p className="main-block__status-title infoTitle">
													Status
												</p>
												<p className="main-block__status-value infoValue">
													{data.status}
												</p>
											</div>
											<div className="main-block__last_air">
												<p className="main-block__last_air-title infoTitle">
													Last air date
												</p>
												<p className="main-block__last_air-value infoValue">
													{data.last_air_date}
												</p>
											</div>
											<div className="main-block__episodes_num">
												<p className="main-block__episodes-title infoTitle">
													No. of episodes
												</p>
												<p className="main-block__episodes-value infoValue">
													{data.number_of_episodes}
												</p>
											</div>
										</div>
									)}
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
												] !== object
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
