import React, { FC } from 'react';
import classes from './BaseButton.module.css';

interface BaseButtonProps {
	children: string | JSX.Element;
}

const BaseButton: FC<BaseButtonProps> = ({ children }) => {
	return <button className={classes.baseButton}>{children}</button>;
};

export default BaseButton;
