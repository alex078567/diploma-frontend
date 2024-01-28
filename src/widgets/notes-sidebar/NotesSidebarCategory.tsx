import React, { useRef } from 'react';
import { FaCheck, FaPen, FaTrash } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { NotesSidebarCategoryI } from './types';
const NotesSidebarCategory: React.FC<NotesSidebarCategoryI> = ({
	index,
	category,
	selectedCategory,
	isEditMode,
	editingCategoryIndex,
	updateCategoryHandler,
	deleteCategoryHandler,
	clickOnCategoryHandler,
	setCategoriesHandler,
	setEditingCategoryIndex,
	resetChangesInCategoryHandler,
}) => {
	const ref = useRef<HTMLInputElement | null>(null);

	const focusOnInput = () => {
		if (ref.current) {
			ref.current.focus();
		}
	};

	const removeInputFocus = () => {
		if (ref.current) {
			ref.current.blur();
		}
	};

	if (!isEditMode) {
		removeInputFocus();
	}

	const editClickHandler = () => {
		setEditingCategoryIndex(index);
	};

	return (
		<div className="notes-sidebar-category">
			<button
				className="notes-sidebar-category__button-around-input"
				onClick={() => {
					clickOnCategoryHandler(category.id);
				}}
			>
				<input
					className={`notes-sidebar-category__input ${
						!isEditMode
							? selectedCategory === category.id
								? 'notes-sidebar-category__input--selected'
								: ''
							: ''
					} ${
						editingCategoryIndex === index
							? 'notes-sidebar-category__input--enabled'
							: 'notes-sidebar-category__input--disabled'
					}`}
					ref={ref}
					type="text"
					value={category.name}
					onChange={(e) => {
						setCategoriesHandler(index, e.target.value);
					}}
				/>
			</button>
			{isEditMode &&
				(editingCategoryIndex === index ? (
					<div className="notes-sidebar-category-button-container">
						<button
							onClick={() => {
								updateCategoryHandler(index);
							}}
							className="notes-sidebar-category-button-container__button"
						>
							<FaCheck />
						</button>
						<button
							className="notes-sidebar-category-button-container__button"
							onClick={() => {
								resetChangesInCategoryHandler(index);
							}}
						>
							<ImCross />
						</button>
					</div>
				) : (
					<div className="notes-sidebar-category-button-container">
						<button
							className="notes-sidebar-category-button-container__button"
							onClick={() => {
								editClickHandler();
								focusOnInput();
							}}
						>
							<FaPen />
						</button>
						<button
							className="notes-sidebar-category-button-container__button"
							onClick={() => {
								deleteCategoryHandler(index);
							}}
						>
							<FaTrash />
						</button>
					</div>
				))}
		</div>
	);
};

export default NotesSidebarCategory;
