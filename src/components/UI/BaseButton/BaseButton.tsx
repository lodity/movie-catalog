import React, { FC, MouseEventHandler } from 'react';
import classes from './BaseButton.module.css';

interface BaseButtonProps {
	type?: 'submit' | 'reset' | 'button';
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: string | JSX.Element;
}

const BaseButton: FC<BaseButtonProps> = ({ type, onClick, children }) => {
	return (
		<button type={type} onClick={onClick} className={classes.baseButton}>
			{children}
		</button>
	);
};

export default BaseButton;
