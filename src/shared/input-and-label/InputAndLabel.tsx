import React from 'react';
import './InputAndLabel.scss';
import { InputAndLabelI } from './types';

const InputAndLabel: React.FC<InputAndLabelI> = ({
	id,
	type,
	name,
	labelText,
	value,
	onChange,
	className = '',
}) => {
	return (
		<div className={`input-and-label ${className}`}>
			<label className="input-and-label__label" htmlFor={id}>
				{labelText}
			</label>
			<input
				className="input-and-label__input"
				id={id}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default InputAndLabel;
