import React, { FC } from 'react';
import Login from '../../components/Login';
import Registration from '../../components/Registration';

type SignInOption = 'login' | 'registration';

interface Interface {
	signInOption: SignInOption;
}

const SignInPage: FC<Interface> = ({ signInOption }) => {
	if (signInOption === 'login') {
		return <Login />;
	} else {
		return <Registration />;
	}
};

export default SignInPage;
