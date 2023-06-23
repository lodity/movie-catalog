import React from 'react';
import BaseButton from './UI/BaseButton/BaseButton';

const Registration = () => {
	return (
		<form className="signInPage__wrapper">
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
			<BaseButton type="submit" onClick={(e) => e.preventDefault()}>
				Registration
			</BaseButton>
		</form>
	);
};

export default Registration;
