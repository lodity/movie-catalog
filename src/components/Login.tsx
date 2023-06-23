import React from 'react';
import BaseButton from './UI/BaseButton/BaseButton';

const Login = () => {
	return (
		<form className="signInPage__wrapper">
			<h1 className="signInPage__title">Login</h1>
			<input
				type="text"
				className="signInPage__username"
				placeholder="Username"
			/>
			<input
				type="password"
				className="signInPage__password"
				placeholder="Password"
			/>
			<BaseButton type="submit" onClick={(e) => e.preventDefault()}>
				Login
			</BaseButton>
		</form>
	);
};

export default Login;
