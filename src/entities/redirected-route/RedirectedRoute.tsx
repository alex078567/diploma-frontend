import { Navigate } from 'react-router-dom';
import { RedirectedRouteProps } from './types';

const RedirectedRoute: React.FC<RedirectedRouteProps> = ({
	user,
	children,
	redirectPath = '/notes',
}) => {
	if (user) {
		return <Navigate to={redirectPath} replace />;
	}

	return children;
};
export default RedirectedRoute;
