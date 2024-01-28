import { notesClient } from 'src/app/axios-setup/axios';
import {
	createNoteI,
	deleteNoteId,
	getNotesByCategoryId,
	updateNoteByIdI,
} from './types';
import { errorHandler } from './errorHandler';
const API_URL = `${import.meta.env.VITE_SERVER_URL}/notes`;

const getNotesByCategoryId: getNotesByCategoryId = async (categoryId) => {
	try {
		const { data } = await notesClient.get(
			`${API_URL}/byCategory/${categoryId}`
		);
		const notes = data.data;
		return notes;
	} catch (e) {
		errorHandler(e);
	}
};

const updateNoteById: updateNoteByIdI = async (id, data) => {
	try {
		await notesClient.patch(`${API_URL}/${id}`, data);
	} catch (e) {
		errorHandler(e);
	}
};

const createNote: createNoteI = async (data) => {
	try {
		await notesClient.post(`${API_URL}/create`, data);
	} catch (e) {
		errorHandler(e);
	}
};

const deleteNote: deleteNoteId = async (id) => {
	try {
		await notesClient.delete(`${API_URL}/${id}`);
	} catch (e) {
		errorHandler(e);
	}
};

const NotesService = {
	getNotesByCategoryId,
	updateNoteById,
	deleteNote,
	createNote,
};

export default NotesService;
