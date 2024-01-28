import { PropsWithChildren } from 'react';
import { StoreWrapper } from './StoreWrapper';
import { RouterWrapper } from './RouterWrapper';

// обертка, объединяющая все обертки в папке

export const Wrappers = ({ children }: PropsWithChildren) => {
	return (
		<StoreWrapper>
			<RouterWrapper>{children}</RouterWrapper>
		</StoreWrapper>
	);
};

export default Wrappers;
