import { ButtonOrLink } from 'src/shared/button';
import { LoginButtonProps } from './types';

const LoginButton: React.FC<LoginButtonProps> = ({ className = '' }) => {
	return (
		<ButtonOrLink className={className} type="link" to="/login" text="Вход" />
	);
};

export default LoginButton;
