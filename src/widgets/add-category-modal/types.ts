import { PopupActions } from 'reactjs-popup/dist/types';

export interface AddCategoryModalI {
	addCategoryModalRef: React.MutableRefObject<PopupActions | null>;
	addCategoryClickHandler: (categoryText: string) => Promise<void>;
	closePopup: () => void;
}
