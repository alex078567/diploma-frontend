import React from 'react';
import './TwoButtonsInline.scss';
import { TwoButtonsInlineProps } from './types';

const TwoButtonsInline: React.FC<TwoButtonsInlineProps> = ({
	children,
	className = '',
}) => {
	return <div className={`two-buttons-container ${className}`}>{children}</div>;
};

export default TwoButtonsInline;
