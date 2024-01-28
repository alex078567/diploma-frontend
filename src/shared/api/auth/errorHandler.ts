import axios, { AxiosError } from 'axios';
import { ErrorHandlerI } from './types';

export const errorHandler: ErrorHandlerI = (e) => {
	const error = e as Error | AxiosError;
	if (!axios.isAxiosError(error)) {
		console.log(error);
	}
	console.log(error);
	throw error;
};
