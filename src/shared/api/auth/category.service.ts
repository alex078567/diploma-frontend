import { notesClient } from 'src/app/axios-setup/axios';
import { errorHandler } from './errorHandler';
import {
	addCategoryByUserIdI,
	deleteCategoryByIdI,
	getCategoriesByUserIdI,
	updateCategoryByIdI,
} from './types';
const API_URL = `${import.meta.env.VITE_SERVER_URL}/categories`;

const getCategoriesByUserId: getCategoriesByUserIdI = async (id) => {
	try {
		const { data } = await notesClient.get(`${API_URL}/${id}`);
		const categories = data.data;
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		const categoriesWithoutUserId = categories.map((category) => {
			const { id, name } = category;
			return {
				id,
				name,
			};
		});

		return categoriesWithoutUserId;
	} catch (e) {
		errorHandler(e);
	}
};

const addCategoryByUserId: addCategoryByUserIdI = async (name, userId) => {
	try {
		await notesClient.post(`${API_URL}/create`, {
			name,
			userId,
		});
	} catch (e) {
		errorHandler(e);
	}
};

const updateCategoryById: updateCategoryByIdI = async (name, categoryId) => {
	try {
		await notesClient.patch(`${API_URL}/${categoryId}`, {
			name,
		});
	} catch (e) {
		errorHandler(e);
	}
};

const deleteCategoryById: deleteCategoryByIdI = async (categoryId) => {
	try {
		await notesClient.delete(`${API_URL}/${categoryId}`);
	} catch (e) {
		errorHandler(e);
	}
};

const CategoryService = {
	getCategoriesByUserId,
	addCategoryByUserId,
	updateCategoryById,
	deleteCategoryById,
};

export default CategoryService;
