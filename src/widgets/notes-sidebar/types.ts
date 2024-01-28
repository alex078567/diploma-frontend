import { CategoriesI, CategoriesT } from 'src/shared/interfaces/interfaces';

export interface NotesSidebarI {
	userId: string;
	categories: CategoriesT;
	setCategories: React.Dispatch<React.SetStateAction<CategoriesT>>;
	selectedCategory: number | undefined;
	getCategoriesFromApi: () => void;
	clickOnCategoryHandler: (categoryId: string) => Promise<void>;
	categoriesBeforeChangesRef: React.MutableRefObject<never[]>;
}

export interface NotesSidebarCategoryI {
	index: number;
	category: CategoriesI;
	selectedCategory: number | undefined;
	isEditMode: boolean;
	editingCategoryIndex: number;
	updateCategoryHandler: (index: number) => Promise<void>;
	deleteCategoryHandler: (index: number) => Promise<void>;
	clickOnCategoryHandler: (categoryId: string) => Promise<void>;
	setCategoriesHandler: (index: number, name: string) => void;
	setEditingCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
	resetChangesInCategoryHandler: (index: number) => void;
}
