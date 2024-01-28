import React, { ChangeEvent, useState } from 'react';
import './LoginForm.scss';
import { InputAndLabel } from 'src/shared/input-and-label';
import { LoginFormProps } from './types';

const LoginForm: React.FC<LoginFormProps> = ({
	signInButton: SignInButton,
}) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	// хендлер, устанавливающий данные в стейт, каждый раз когда происходит ввод в поля форма
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.target;
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
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
					id="password"
					type="password"
					name="password"
					labelText="Пароль"
					value={formData.password}
					onChange={handleChange}
				/>
			</div>
			<SignInButton formData={formData} />
		</form>
	);
};

export default LoginForm;
