import { FormDataI } from 'src/shared/interfaces/interfaces';

export interface SignUpButtonProps {
	className?: string;
	formData: FormDataI;
	passwordsMatchChecker: () => boolean;
	inputsNotEmptyChecker: () => boolean;
}
