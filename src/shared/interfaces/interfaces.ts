export interface FormDataI {
	email: string;
	password: string;
	password_confirm: string;
	name: string;
	surname: string;
}

export interface NotesDataUpdateI {
	title: string;
	color: string;
	text: string;
}

export interface NotesDataCreateI extends NotesDataUpdateI {
	userId: string;
	categoryId: string;
}

export interface CategoriesI {
	id: number;
	name: string;
}

export type CategoriesT = CategoriesI[] | [];
