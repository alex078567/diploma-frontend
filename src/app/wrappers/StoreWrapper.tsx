import { store } from '../store/store';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

// обертка, которая подключает приложение к React Redux Toolkit
export const StoreWrapper = ({ children }: PropsWithChildren) => {
	return <Provider store={store}>{children}</Provider>;
};
