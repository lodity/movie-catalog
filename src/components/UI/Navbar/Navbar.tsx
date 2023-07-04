import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

const Navbar = () => {
	const { isAuthenticated } = useTypedSelector((state) => state.auth);
	const { logout } = useActions();

	let authLinks;
	if (!isAuthenticated) {
		authLinks = (
			<li className="header__item">
				<NavLink to="/login">Login</NavLink>
				<NavLink to="/registration">Register</NavLink>
			</li>
		);
	} else {
		authLinks = (
			<>
				<li className="header__item">
					<NavLink to="/account">Account</NavLink>
				</li>
				<li className="header__item">
					<button type="button" onClick={logout}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M17.4404 14.62L20.0004 12.06L17.4404 9.5"
								stroke="#767E94"
								strokeWidth="1.5"
								strokeMiterlimit="10"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M9.75977 12.0601H19.9298"
								stroke="#767E94"
								strokeWidth="1.5"
								strokeMiterlimit="10"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4"
								stroke="#767E94"
								strokeWidth="1.5"
								strokeMiterlimit="10"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span>Logout</span>
					</button>
				</li>
			</>
		);
	}

	return (
		<header className="header">
			<div className="header__searchLogo">
				<NavLink to="/">
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
				</NavLink>
				<SearchInput classUi="headerSearch" searchType="multi" />
			</div>
			<ul className="header__list">
				<li className="header__item">
					<NavLink to="/movies">
						<div>Movies</div>
					</NavLink>
				</li>
				<li className="header__item">
					<NavLink to="/TVshows">
						<div>TV Shows</div>
					</NavLink>
				</li>
				{authLinks}
			</ul>
		</header>
	);
};

export default Navbar;
