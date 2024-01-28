import { notesClient } from 'src/app/axios-setup/axios';
import { errorHandler } from './errorHandler';
import { RegisterI, loginI } from './types';
const API_URL = `${import.meta.env.VITE_SERVER_URL}/users`;

const register: RegisterI = async (
	email,
	password,
	password_confirm,
	name,
	surname
) => {
	try {
		await notesClient.post(`${API_URL}/register`, {
			email,
			password,
			password_confirm,
			name,
			surname,
		});
	} catch (e) {
		errorHandler(e);
	}
};

const login: loginI = async (email, password) => {
	try {
		const response = await notesClient.post(
			`${API_URL}/login`,
			{
				email,
				password,
			},
			{ withCredentials: true }
		);
		return response.data;
	} catch (e) {
		errorHandler(e);
	}
};

const getUser = async () => {
	try {
		const response = await notesClient.get(`${API_URL}/1`);
		return response.data;
	} catch (e) {
		errorHandler(e);
	}
};

const getUserIdByToken = async () => {
	try {
		const response = await notesClient.post(
			`${API_URL}/getUserIdByToken`,
			{},
			{
				withCredentials: true,
			}
		);

		return response.data;
	} catch (e) {
		errorHandler(e);
	}
};

const AuthService = {
	register,
	login,
	getUser,
	getUserIdByToken,
};

export default AuthService;
