import { FC, useState } from 'react';
import BaseButton from './UI/BaseButton/BaseButton';
import { useActions } from '../hooks/useActions';

const Login: FC = () => {
	const [usernameOrEmail, setUsernameOrEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const { login } = useActions();

	return (
		<form name="login" className="signInPage__wrapper">
			<h1 className="signInPage__title">Login</h1>
			<input
				onChange={(e) => setUsernameOrEmail(e.target.value)}
				value={usernameOrEmail}
				type="text"
				name="username"
				autoComplete="username"
				className="signInPage__username"
				placeholder="Username or email"
			/>
			<input
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				type="password"
				name="password"
				autoComplete="current-password"
				className="signInPage__password"
				placeholder="Password"
			/>
			<BaseButton
				type="submit"
				onClick={(e) => {
					e.preventDefault();
					console.log(usernameOrEmail, password);
					login(usernameOrEmail, password);
				}}
			>
				Login
			</BaseButton>
		</form>
	);
};

export default Login;
