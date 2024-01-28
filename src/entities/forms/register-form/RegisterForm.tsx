import React, { ChangeEvent, useState } from 'react';
import './RegisterForm.scss';
import { InputAndLabel } from 'src/shared/input-and-label';
import { RegisterFormProps } from './types';

const RegisterForm: React.FC<RegisterFormProps> = ({
	signUpButton: SignUpButton,
}) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		password_confirm: '',
		name: '',
		surname: '',
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const passwordsMatchChecker = () => {
		const { password, password_confirm } = formData;
		if (password === password_confirm) {
			return true;
		}
		return false;
	};

	const inputsNotEmptyChecker = () => {
		let isEmpty = false;
		Object.values(formData).forEach((objectValue) => {
			if (!objectValue.length) {
				isEmpty = true;
				return;
			}
		});
		return isEmpty ? false : true;
	};

	return (
		<form
			className="login-form"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<div className="login-form__input-container">
				<InputAndLabel
					id="email"
					type="text"
					name="email"
					labelText="Эл. почта"
					value={formData.email}
					onChange={handleChange}
				/>
				<InputAndLabel
					id="name"
					type="text"
					name="name"
					labelText="Имя"
					value={formData.name}
					onChange={handleChange}
				/>
				<InputAndLabel
					id="surname"
					type="text"
					name="surname"
					labelText="Фамилия"
					value={formData.surname}
					onChange={handleChange}
				/>
				<InputAndLabel
					id="password"
					type="password"
					name="password"
					labelText="Пароль"
					value={formData.password}
					onChange={handleChange}
				/>
				<InputAndLabel
					id="password_confirm"
					type="password"
					name="password_confirm"
					labelText="Повторите пароль"
					value={formData.password_confirm}
					onChange={handleChange}
				/>
			</div>
			<SignUpButton
				passwordsMatchChecker={passwordsMatchChecker}
				formData={formData}
				inputsNotEmptyChecker={inputsNotEmptyChecker}
			/>
		</form>
	);
};

export default RegisterForm;
