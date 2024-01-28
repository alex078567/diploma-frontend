import { ButtonOrLink } from 'src/shared/button';
import { useAppDispatch } from 'src/shared/hooks';
import { login } from 'src/features/auth/authSlice';
import { SignInButtonProps } from './types';

const SignInButton: React.FC<SignInButtonProps> = ({ className, formData }) => {
	const dispatch = useAppDispatch();
	const clickHandler = async () => {
		dispatch(login({ email: formData.email, password: formData.password }));
	};

	return (
		<ButtonOrLink
			className={className}
			onClick={clickHandler}
			type="button"
			text="Войти"
		/>
	);
};

export default SignInButton;
