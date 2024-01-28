import { useRef, useState } from 'react';
import { ButtonOrLink } from 'src/shared/button';
import './NotesSidebar.scss';

import NotesSidebarCategory from './NotesSidebarCategory';
import { AddCategoryModal } from '..';
import { PopupActions } from 'reactjs-popup/dist/types';
import { CategoryService } from 'src/shared/api/auth';
import { useAppDispatch } from 'src/shared/hooks';
import {
	setIsLoadingFalse,
	setIsLoadingTrue,
} from 'src/features/auth/authSlice';
import { NotesSidebarI } from './types';

const NotesSidebar: React.FC<NotesSidebarI> = ({
	userId,
	categories,
	setCategories,
	selectedCategory,
	getCategoriesFromApi,
	clickOnCategoryHandler,
	categoriesBeforeChangesRef,
}) => {
	const dispatch = useAppDispatch();
	const addCategoryModalRef = useRef<PopupActions | null>(null);
	const [isEditMode, setIsEditMode] = useState(false);
	const [editingCategoryIndex, setEditingCategoryIndex] = useState(-1);

	const setCategoriesHandler = (index, name) => {
		const categoriesArray = [...categories];
		categoriesArray[index].name = name;
		setCategories(categoriesArray);
	};

	const resetChangesInCategoryHandler = (index) => {
		const categoriesArray = [...categories];
		categoriesArray[index] = { ...categoriesBeforeChangesRef.current[index] };
		setCategories(categoriesArray);
		setEditingCategoryIndex(-1);
	};

	const editButtonClickHandler = () => {
		if (isEditMode) {
			setEditingCategoryIndex(-1);
			setIsEditMode(false);
			const newSetCategoriesArray = categoriesBeforeChangesRef.current.map(
				(category) => {
					return { ...category };
				}
			);
			setCategories(newSetCategoriesArray);
		} else {
			setIsEditMode(true);
		}
	};

	const addCategoryClickHandler = async (categoryText) => {
		await CategoryService.addCategoryByUserId(categoryText, userId);
		closePopup();
		const notes = await CategoryService.getCategoriesByUserId(userId);

		categoriesBeforeChangesRef.current = JSON.parse(JSON.stringify(notes));
		setCategories(notes);
	};

	const openPopup = () => {
		if (addCategoryModalRef.current) {
			addCategoryModalRef.current.open();
		}
	};

	const closePopup = () => {
		if (addCategoryModalRef.current) {
			addCategoryModalRef.current.close();
		}
	};

	const updateCategoryHandler = async (index) => {
		const { name, id } = categories[index];
		dispatch(setIsLoadingTrue());
		await CategoryService.updateCategoryById(name, id);
		await getCategoriesFromApi();
		setEditingCategoryIndex(-1);
		dispatch(setIsLoadingFalse());
	};

	const deleteCategoryHandler = async (index) => {
		const { id } = categories[index];
		dispatch(setIsLoadingTrue());
		await CategoryService.deleteCategoryById(id);
		await getCategoriesFromApi();
		setEditingCategoryIndex(-1);
		dispatch(setIsLoadingFalse());
	};
	return (
		<div className="notes-sidebar">
			<div className="notes-sidebar-category-container">
				{categories.map((category, index) => {
					return (
						<NotesSidebarCategory
							key={category.id}
							index={index}
							category={category}
							selectedCategory={selectedCategory}
							isEditMode={isEditMode}
							clickOnCategoryHandler={clickOnCategoryHandler}
							editingCategoryIndex={editingCategoryIndex}
							updateCategoryHandler={updateCategoryHandler}
							deleteCategoryHandler={deleteCategoryHandler}
							resetChangesInCategoryHandler={resetChangesInCategoryHandler}
							setCategoriesHandler={setCategoriesHandler}
							setEditingCategoryIndex={setEditingCategoryIndex}
						/>
					);
				})}
			</div>
			<div className="notes-sidebar-button-container">
				<ButtonOrLink
					type="button"
					onClick={editButtonClickHandler}
					text={isEditMode ? 'Ок' : 'Редактировать'}
				/>
				<ButtonOrLink
					type="button"
					onClick={openPopup}
					text="Добавить категорию"
				/>
			</div>
			<AddCategoryModal
				addCategoryModalRef={addCategoryModalRef}
				addCategoryClickHandler={addCategoryClickHandler}
				closePopup={closePopup}
			/>
		</div>
	);
};

export default NotesSidebar;
