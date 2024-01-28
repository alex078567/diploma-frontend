import React, { ChangeEvent, useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { InputAndLabel } from 'src/shared/input-and-label';
import { CirclePicker } from 'react-color';
import { ButtonOrLink } from 'src/shared/button';

import './EditNoteModal.scss';
import { NotesService } from 'src/shared/api/auth';
import { EditNoteModalI } from './types';
import { useAppSelector } from 'src/shared/hooks';
const EditNoteModal: React.FC<EditNoteModalI> = ({
	isCreatingNewNote,
	setIsCreatingNewNote,
	clickOnCategoryHandler,
	closePopup,
	selectedCategory,
	editNoteModalRef,
	noteDataFromParent,
}) => {
	const [noteData, setNoteData] = useState({});
	const { id: userId } = useAppSelector((state) => {
		return state.auth;
	});
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.hex) {
			setNoteData((prevFormData) => ({
				...prevFormData,
				['color']: event.hex.slice(1),
			}));
			return;
		}
		const { name, value } = event.target;
		setNoteData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	useEffect(() => {
		setNoteData(noteDataFromParent);
		console.log(noteDataFromParent);
	}, [noteDataFromParent]);

	const saveChangesHandler = async () => {
		if (isCreatingNewNote) {
			await NotesService.createNote({
				title: noteData.title,
				color: noteData.color,
				text: noteData.text,
				userId: userId,
				categoryId: selectedCategory,
			});
			setIsCreatingNewNote(false);
		} else {
			await NotesService.updateNoteById(noteData.id, {
				title: noteData.title,
				color: noteData.color,
				text: noteData.text,
			});
		}

		await clickOnCategoryHandler(selectedCategory);

		closePopup();
	};

	return (
		<Popup
			ref={editNoteModalRef}
			closeOnDocumentClick
			onClose={() => {
				setNoteData(noteDataFromParent);
			}}
		>
			<div className="add-category-modal">
				<InputAndLabel
					id="title"
					name="title"
					type="text"
					labelText="Заголовок"
					value={noteData.title}
					onChange={(e) => {
						handleChange(e);
					}}
				></InputAndLabel>
				<label htmlFor="noteText">Текст заметки</label>
				<textarea
					id="text"
					name="text"
					value={noteData.text}
					onChange={(e) => {
						handleChange(e);
					}}
				></textarea>
				<p>Цвет заметки</p>
				<CirclePicker
					width="500"
					color={`#${noteData.color}`}
					onChange={(e) => {
						handleChange(e);
					}}
					colors={['#bd92bb', '#9295bd', '#92a9bd', '#acbd92', '#aabd92']}
				/>
				<div className="add-category-modal__button-container">
					<ButtonOrLink
						type="button"
						onClick={() => {
							saveChangesHandler();
						}}
						text="Сохранить"
					/>
					<ButtonOrLink
						type="button"
						onClick={() => {
							closePopup();
						}}
						text="Отменить"
					/>
				</div>
			</div>
		</Popup>
	);
};

export default EditNoteModal;
