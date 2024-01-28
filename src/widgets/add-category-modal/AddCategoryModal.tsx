import { useState } from 'react';
import Popup from 'reactjs-popup';
import { ButtonOrLink } from 'src/shared/button';
import { InputAndLabel } from 'src/shared/input-and-label';
import './AddCategoryModal.scss';
import { AddCategoryModalI } from './types';

const AddCategoryModal: React.FC<AddCategoryModalI> = ({
	addCategoryModalRef,
	addCategoryClickHandler,
	closePopup,
}) => {
	const [categoryText, setCategoryText] = useState('');

	const resetClickHandler = () => {
		closePopup();
		setCategoryText('');
	};
	return (
		<Popup
			className="add-category-modal__popup"
			ref={addCategoryModalRef}
			closeOnDocumentClick
		>
			<div className="add-category-modal">
				<InputAndLabel
					className="add-category-modal__input-and-label"
					id="category"
					name="category"
					type="text"
					labelText="Имя категории"
					value={categoryText}
					onChange={(e: any) => setCategoryText(e.target.value)}
				/>
				<ButtonOrLink
					className="add-category-modal__button"
					text="Добавить категорию"
					type="button"
					onClick={() => {
						addCategoryClickHandler(categoryText);
						setCategoryText('');
					}}
				/>
				<ButtonOrLink
					className="add-category-modal__button"
					text="Отменить"
					type="button"
					onClick={resetClickHandler}
				/>
			</div>
		</Popup>
	);
};

export default AddCategoryModal;
