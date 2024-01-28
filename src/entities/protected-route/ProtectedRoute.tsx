import { Navigate } from 'react-router-dom';
import { ProtectedRouteProps } from './types';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	user,
	children,
	redirectPath = '/login',
}) => {
	if (!user) {
		return <Navigate to={redirectPath} replace />;
	}

	return children;
};
export default ProtectedRoute;
