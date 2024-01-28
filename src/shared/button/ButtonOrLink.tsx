import React from 'react';
import { ButtonOrLinkT } from './types';
import './ButtonOrLink.scss';
import { Link } from 'react-router-dom';

const ButtonOrLink: React.FC<ButtonOrLinkT> = ({
	type,
	text,
	to,
	onClick,
	className,
}) => {
	if (type === 'link') {
		return (
			<Link to={to} className={`link-button ${className}`}>
				{text}
			</Link>
		);
	}
	return (
		<button onClick={onClick} className={`link-button ${className}`}>
			{text}
		</button>
	);
};

export default ButtonOrLink;
