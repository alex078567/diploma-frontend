import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

// обертка, которая подключает приложение к React Router
export const RouterWrapper = ({ children }: PropsWithChildren) => {
	return <BrowserRouter>{children}</BrowserRouter>;
};
