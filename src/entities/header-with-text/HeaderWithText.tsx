import React from 'react';
import './HeaderWithText.scss';
import { HeaderWithTextProps } from './types';

const HeaderWithText: React.FC<HeaderWithTextProps> = ({
	headerText,
	descriptionText,
	className = '',
}) => {
	return (
		<article className={`header-with-text ${className}`}>
			<h1 className="header-with-text--header">{headerText}</h1>
			<p className="header-with-text--text">{descriptionText}</p>
		</article>
	);
};

export default HeaderWithText;
