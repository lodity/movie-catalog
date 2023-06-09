import React from 'react';
import BaseButton from './UI/BaseButton/BaseButton';

const Registration = () => {
	return (
		<div className="signInPage__wrapper">
			<h1 className="signInPage__title">Registration</h1>
			<input
				type="text"
				className="signInPage__username"
				placeholder="Username"
			/>
			<input
				type="email"
				className="signInPage__email"
				placeholder="Email"
			/>
			<input
				type="password"
				className="signInPage__password"
				placeholder="Password"
			/>
			<BaseButton>Registration</BaseButton>
		</div>
	);
};

export default Registration;
