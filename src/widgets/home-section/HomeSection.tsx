import { HeaderWithText, TwoButtonsInline } from 'src/entities';
import { LoginButton, RegisterButton } from 'src/features';
import './HomeSection.scss';

const HomeSection = () => {
	return (
		<section className="home-page-hero">
			<HeaderWithText
				headerText="Заметки"
				descriptionText="Простая система для организации дел"
			/>
			<TwoButtonsInline>
				<LoginButton />
				<RegisterButton />
			</TwoButtonsInline>
		</section>
	);
};

export default HomeSection;
