import { Routing } from 'src/pages';
import Wrappers from './wrappers';
import './styles/index.scss';

// Готовый компонент, который импортируется из папки app

const App = () => {
	return (
		<Wrappers>
			<Routing />
		</Wrappers>
	);
};

export default App;
