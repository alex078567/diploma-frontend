import { RegisterForm } from 'src/entities';
import { SignUpButton } from 'src/features';
import './RegisterSection.scss';
const RegisterSection = () => {
	return (
		<section className="login-section-hero">
			<div className="login-section-hero__block">
				<h1 className="login-section-hero__header">Регистрация</h1>
				<RegisterForm signUpButton={SignUpButton} />
			</div>
		</section>
	);
};

export default RegisterSection;
