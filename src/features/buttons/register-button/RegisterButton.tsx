import React from 'react';
import { ButtonOrLink } from 'src/shared/button';
import { RegisterButtonProps } from './types';

const RegisterButton: React.FC<RegisterButtonProps> = ({ className = '' }) => {
	return (
		<ButtonOrLink
			className={className}
			type="link"
			to="/register"
			text="Регистрация"
		/>
	);
};

export default RegisterButton;
