import React, { FC, useState } from 'react';
import classes from './BurgerMenu.module.css';

interface Interface {
	header?: string;
	content: any;
	isActive: boolean;
	setIsActive: (isActive: boolean) => void;
}

const BurgerMenu: FC<Interface> = ({
	header,
	content,
	isActive,
	setIsActive,
}) => {
	return (
		<div
			className={classes.menu + ' ' + (isActive ? classes.active : '')}
			onClick={() => setIsActive(false)}
		>
			<div className={classes.blur} />
			<div
				className={classes.content}
				onClick={(event) => event.stopPropagation()}
			>
				<div className={classes.header}>{header}</div>
				<div
					className={classes.close}
					onClick={() => setIsActive(false)}
				/>
				<div onClick={() => setIsActive(false)}>{content}</div>
			</div>
		</div>
	);
};

export default BurgerMenu;
