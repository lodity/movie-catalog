import React, { FC } from 'react';
import classes from './Popup.module.css';

interface PopupProps {
	children: JSX.Element;
	// TODO set right type
	visiblePopup: any;
	setVisiblePopup: any;
	// ====================
}

const Popup: FC<PopupProps> = ({ children, visiblePopup, setVisiblePopup }) => {
	const rootClasses = [classes.wrapper];
	if (visiblePopup) {
		rootClasses.push(classes.Active);
	}

	return (
		<div
			className={rootClasses.join(' ')}
			onClick={() => setVisiblePopup(false)}
		>
			<div className={classes.popup} onClick={(e) => e.stopPropagation()}>
				<button
					onClick={() => setVisiblePopup(false)}
					className={classes.popupCloseButton}
				>
					<svg
						width="10"
						height="10"
						viewBox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.757812 0.757355L9.24309 9.24261"
							stroke="#8E95A9"
						/>
						<path
							d="M0.757812 9.24261L9.24312 0.757355"
							stroke="#8E95A9"
						/>
					</svg>
				</button>
				<div className={classes.popupContent}>{children}</div>
			</div>
		</div>
	);
};

export default Popup;
