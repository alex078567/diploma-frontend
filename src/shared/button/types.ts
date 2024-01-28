import { MouseEventHandler } from 'react';
import { Path } from 'react-router-dom';

interface ButtonI {
	type: 'button';
	text: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	to?: never;
	className?: string;
}

interface LinkI {
	type: 'link';
	text: string;
	to: string | Partial<Path>;
	onClick?: never;
	className?: string;
}

export type ButtonOrLinkT = ButtonI | LinkI;
