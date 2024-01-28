import React from 'react';
import './AllPagesWrapper.scss';
import { AllPagesWrapperProps } from './types';
const AllPagesWrapper: React.FC<AllPagesWrapperProps> = ({ children }) => {
	return <div className="all-pages-wrapper">{children}</div>;
};

export default AllPagesWrapper;
