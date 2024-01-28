import { PopupActions } from 'reactjs-popup/dist/types';
import { CategoriesT } from 'src/shared/interfaces/interfaces';

export interface NotesContainerI {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	notes: any[];
	categories: CategoriesT;
	selectedCategory: number | undefined;
	clickOnCategoryHandler: (categoryId: string) => Promise<void>;
}

export interface EditNoteModalI {
	isCreatingNewNote: boolean;
	setIsCreatingNewNote: React.Dispatch<React.SetStateAction<boolean>>;
	clickOnCategoryHandler: (categoryId: string) => Promise<void>;
	closePopup: () => void;
	selectedCategory: number | undefined;
	editNoteModalRef: React.MutableRefObject<PopupActions | null>;
	noteDataFromParent: object;
}
