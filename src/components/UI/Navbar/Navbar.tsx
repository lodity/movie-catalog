import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';

const Navbar = () => {
	return (
		<header className="header">
			<div className="header__searchLogo">
				<Link to="/">
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.25604 15.7628L26.78 4.768C30.0968 2.6872 34.4001 5.0796 34.4001 9.0052V30.9948C34.4001 34.92 30.0968 37.3128 26.78 35.232L9.25604 24.2372C6.13644 22.2796 6.13644 17.7204 9.25604 15.7628Z"
							fill="#4BB7FD"
						/>
						<path
							d="M30.7439 15.7628L13.2199 4.768C9.9031 2.6872 5.5999 5.0796 5.5999 9.0052V30.9948C5.5999 34.92 9.9031 37.3128 13.2199 35.232L30.7439 24.2372C33.8635 22.2796 33.8635 17.7204 30.7439 15.7628Z"
							fill="#7B6EF6"
						/>
					</svg>
				</Link>
				<SearchInput classUi="headerSearch" searchType="multi" />
			</div>
			<ul className="header__list">
				<Link className="header__item" to="/movies">
					<div>Movies</div>
				</Link>
				<Link className="header__item" to="/TVshows">
					<div>TV Shows</div>
				</Link>
			</ul>
		</header>
	);
};

export default Navbar;
