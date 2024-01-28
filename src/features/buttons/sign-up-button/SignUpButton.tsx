import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthService } from 'src/shared/api/auth';
import { ButtonOrLink } from 'src/shared/button';
import { SignUpButtonProps } from './types';

const SignUpButton: React.FC<SignUpButtonProps> = ({
	className,
	formData,
	passwordsMatchChecker,
	inputsNotEmptyChecker,
}) => {
	const navigate = useNavigate();

	const clickHandler = async () => {
		const isPasswordsMatch = passwordsMatchChecker();
		const isInputsNotEmpty = inputsNotEmptyChecker();

		if (!isInputsNotEmpty) {
			toast.error('Все окна должны быть заполнены');
			return;
		}

		if (!isPasswordsMatch) {
			toast.error('Введенные пароли не совпадают');
			return;
		}

		try {
			await AuthService.register(
				formData.email,
				formData.password,
				formData.password_confirm,
				formData.name,
				formData.surname
			);

			navigate('/login');
			toast.success('Введите логин и пароль');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ButtonOrLink
			className={className}
			onClick={clickHandler}
			type="button"
			text="Регистрация"
		/>
	);
};

export default SignUpButton;
