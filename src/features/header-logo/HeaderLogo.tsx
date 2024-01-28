import React from 'react';
import Logo from 'src/shared/imgs/android-chrome-512x512.png';
import './HeaderLogo.scss';
import { Link } from 'react-router-dom';
import { HeaderLogoProps } from './types';
const HeaderLogo: React.FC<HeaderLogoProps> = ({ className = '' }) => {
	return (
		<div className={`header-logo ${className}`}>
			<Link className="header-logo__link" to="/">
				<img className="header-logo__img" src={Logo} alt="Логотип" />
				<p className="header-logo__text"> Заметки</p>
			</Link>
		</div>
	);
};

export default HeaderLogo;
