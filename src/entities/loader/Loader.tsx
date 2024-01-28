import { Comment } from 'react-loader-spinner';
import './Loader.scss';
const Loader = () => {
	return (
		<div className="loader-container">
			<div className="loader">
				<Comment backgroundColor="#FFBD03" />
			</div>
		</div>
	);
};

export default Loader;
