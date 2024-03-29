import { useState } from 'react';
import BaseButton from './UI/BaseButton/BaseButton';
import { useActions } from '../hooks/useActions';

const Registration = () => {
	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const { registration } = useActions();

	return (
		<form
			name="registration"
			autoComplete="off"
			className="signInPage__wrapper"
		>
			<h1 className="signInPage__title">Registration</h1>
			<input
				onChange={(e) => setUsername(e.target.value)}
				value={username}
				type="text"
				name="username"
				autoComplete="username"
				className="signInPage__username"
				placeholder="Username"
			/>
			<input
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				type="email"
				name="email"
				autoComplete="email"
				className="signInPage__email"
				placeholder="Email"
			/>
			<input
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				autoComplete="new-password"
				type="password"
				name="password"
				className="signInPage__password"
				placeholder="Password"
			/>
			<BaseButton
				type="submit"
				onClick={(e) => {
					e.preventDefault();
					console.log(username, email, password);
					registration(username, email, password);
				}}
			>
				Registration
			</BaseButton>
		</form>
	);
};

export default Registration;
