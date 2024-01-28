import { useRef, useState } from 'react';
import './NotesContainer.scss';
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa';
import EditNoteModal from './EditNoteModal';
import { PopupActions } from 'reactjs-popup/dist/types';
import { NotesService } from 'src/shared/api/auth';
import { NotesContainerI } from './types';

const NotesContainer: React.FC<NotesContainerI> = ({
	categories,
	notes,
	selectedCategory,
	clickOnCategoryHandler,
}) => {
	const [modalData, setModalData] = useState({});
	const [isCreatingNewNote, setIsCreatingNewNote] = useState(false);
	const editNoteModalRef = useRef<PopupActions | null>(null);

	const editNoteClickHandler = (noteData) => {
		setModalData(noteData);
		openPopup();
	};
	const deleteNoteClickHandler = async (noteData) => {
		const { id, categoryId } = noteData;
		await NotesService.deleteNote(id);
		await clickOnCategoryHandler(categoryId);
		console.log(noteData);
	};

	const createNoteClickHandler = () => {
		setIsCreatingNewNote(true);
		openPopup();
	};

	const openPopup = () => {
		if (editNoteModalRef.current) {
			editNoteModalRef.current.open();
		}
	};

	const closePopup = () => {
		if (editNoteModalRef.current) {
			editNoteModalRef.current.close();
		}
	};

	return (
		<section className="notes-notes-container">
			{notes.map((note) => {
				const { id, title, color, text } = note;
				return (
					<article
						className="single-note"
						key={id}
						style={{ backgroundColor: `#${color}` }}
					>
						<div className="single-note__text-container">
							<h3 className="single-note__header">{title}</h3>
							<p className="single-note__text">{text}</p>
						</div>
						<div className="single-note__button-container">
							<button
								className="single-note__button"
								onClick={() => {
									editNoteClickHandler(note);
								}}
							>
								<FaPen className="single-note__icon" />
							</button>
							<button
								className="single-note__button"
								onClick={() => {
									deleteNoteClickHandler(note);
								}}
							>
								<FaTrash className="single-note__icon" />
							</button>
						</div>
					</article>
				);
			})}
			<article>
				<button onClick={createNoteClickHandler} className="single-note-button">
					<div>
						<FaPlusCircle size={36} className="single-note-button__icon" />
						<p className="single-note-button__text">Добавить заметку</p>
					</div>
				</button>
			</article>
			<EditNoteModal
				isCreatingNewNote={isCreatingNewNote}
				setIsCreatingNewNote={setIsCreatingNewNote}
				clickOnCategoryHandler={clickOnCategoryHandler}
				closePopup={closePopup}
				selectedCategory={selectedCategory}
				editNoteModalRef={editNoteModalRef}
				noteDataFromParent={modalData}
			/>
		</section>
	);
};

export default NotesContainer;
