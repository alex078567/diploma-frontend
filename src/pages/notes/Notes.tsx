import { useEffect, useRef, useState } from 'react';
import { CategoriesT } from 'src/shared/interfaces/interfaces';
import { CategoryService } from 'src/shared/api/auth';
import { useAppSelector } from 'src/shared/hooks';
import { NotesSidebar } from 'src/widgets';
import NotesContainer from 'src/widgets/notes-container/NotesContainer';
import './Notes.scss';
import { NotesService } from 'src/shared/api/auth';
const Notes = () => {
	const [categories, setCategories] = useState<CategoriesT>([]);
	const { id: userId } = useAppSelector((state) => {
		return state.auth;
	});

	const [notes, setNotes] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState();
	const categoriesBeforeChangesRef = useRef([]);

	const getCategoriesFromApi = async () => {
		const categories = await CategoryService.getCategoriesByUserId(userId);
		categoriesBeforeChangesRef.current = JSON.parse(JSON.stringify(categories));
		setSelectedCategory(categories[0].id);
		setCategories(categories);
	};

	const getCategoriesAndNotesFromApi = async () => {
		const categories = await CategoryService.getCategoriesByUserId(userId);
		categoriesBeforeChangesRef.current = JSON.parse(JSON.stringify(categories));
		setSelectedCategory(categories[0].id);
		const notes = await NotesService.getNotesByCategoryId(categories[0].id);
		setNotes(notes);
		setCategories(categories);
	};

	const clickOnCategoryHandler = async (categoryId) => {
		const notes = await NotesService.getNotesByCategoryId(categoryId);
		setSelectedCategory(categoryId);
		setNotes(notes);
	};

	useEffect(() => {
		getCategoriesAndNotesFromApi();
	}, []);

	return (
		<main className="notes-page-main">
			<NotesSidebar
				userId={userId}
				categories={categories}
				setCategories={setCategories}
				selectedCategory={selectedCategory}
				clickOnCategoryHandler={clickOnCategoryHandler}
				getCategoriesFromApi={getCategoriesFromApi}
				categoriesBeforeChangesRef={categoriesBeforeChangesRef}
			/>
			<NotesContainer
				notes={notes}
				categories={categories}
				selectedCategory={selectedCategory}
				clickOnCategoryHandler={clickOnCategoryHandler}
			/>
		</main>
	);
};

export default Notes;
