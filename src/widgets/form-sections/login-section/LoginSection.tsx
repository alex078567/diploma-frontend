import { LoginForm } from 'src/entities';
import { SignInButton } from 'src/features';
import './LoginSection.scss';

const LoginSection = () => {
	return (
		<section className="login-section-hero">
			<div className="login-section-hero__block">
				<h1 className="login-section-hero__header">Вход &#171;Заметки&#187;</h1>
				<LoginForm signInButton={SignInButton} />
			</div>
		</section>
	);
};

export default LoginSection;
