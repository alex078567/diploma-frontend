export interface ProtectedRouteProps {
	user: boolean;
	children: React.ReactNode;
	redirectPath?: string;
}
