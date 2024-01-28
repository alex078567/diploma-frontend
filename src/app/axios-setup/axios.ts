import axios from 'axios';
const API_URL = `${import.meta.env.VITE_SERVER_URL}`;
import { toast } from 'react-toastify';

// создаем кастомный экземпляр axios
export const notesClient = axios.create({
	baseURL: `${API_URL}/users`,
	timeout: 5000,
});

// настраиваем перехватчик таким образом, чтобы он перехватывал запрос
// если токен доступа (access token) устарел
notesClient.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const originalRequest = error.config;

		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			const response = await notesClient.post(
				'refresh',
				{},
				{ withCredentials: true }
			);

			notesClient.defaults.headers.common[
				'Authorization'
			] = `Bearer ${response.data.token}`;

			originalRequest.headers.Authorization = `Bearer ${response.data.token}`;

			return notesClient(originalRequest);
		}
		//Если ошибка не 401 вывести сообщение о ней на экран и вернуть эту ошибку
		toast.error(error.response.data.message[0].message);
		return Promise.reject(error);
	}
);
