import React from 'react';
import BaseButton from '../components/UI/BaseButton/BaseButton';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div className="notFoundPage">
			<img
				className="notFoundPage__image"
				src={require('../assets/images/NotFoundPageImage.png')}
				alt="NotFoundPageImage"
			/>
			<h1 className="notFoundPage__title">Lost your way?</h1>
			<p className="notFoundPage__text">
				Oops! This is awkward. You are looking for something that
				doesn't actually exist.
			</p>
			<Link to="/">
				<BaseButton>Go Home</BaseButton>
			</Link>
		</div>
	);
};

export default NotFoundPage;
