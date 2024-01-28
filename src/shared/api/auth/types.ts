import {
	NotesDataCreateI,
	NotesDataUpdateI,
} from 'src/shared/interfaces/interfaces';

export interface RegisterI {
	(
		email: string,
		password: string,
		password_confirm: string,
		name: string,
		surname: string
	): Promise<void>;
}

export interface loginI {
	(email: string, password: string): Promise<void>;
}

export interface ErrorHandlerI {
	(e: unknown): void;
}

export interface getCategoriesByUserIdI {
	(id: string): Promise<void>;
}
export interface addCategoryByUserIdI {
	(name: string, userId: string): Promise<void>;
}
export interface updateCategoryByIdI {
	(name: string, categoryId: string): Promise<void>;
}
export interface deleteCategoryByIdI {
	(categoryId: string): Promise<void>;
}

export interface getNotesByCategoryId extends deleteCategoryByIdI {}

export interface updateNoteByIdI {
	(id: string, data: NotesDataUpdateI): Promise<void>;
}
export interface createNoteI {
	(data: NotesDataCreateI): Promise<void>;
}

export interface deleteNoteId extends getCategoriesByUserIdI {}
