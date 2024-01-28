import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
import Register from './register/Register';
import { Header } from 'src/widgets/header';
import { AllPagesWrapper } from './wrappers';
import { useAppSelector } from 'src/shared/hooks';
import './styles/pages-styles.scss';
import { ToastContainer } from 'react-toastify';
import { Loader, ProtectedRoute, RedirectedRoute } from 'src/entities';
import 'react-toastify/dist/ReactToastify.css';
import Notes from './notes/Notes';

export const Routing = () => {
	const { isLoggedIn, isLoading } = useAppSelector((state) => state.auth);

	return (
		<AllPagesWrapper>
			<Header />
			{isLoading && <Loader />}
			<ToastContainer position="top-center" autoClose={300000} />
			<Routes>
				<Route
					path="/"
					element={
						<RedirectedRoute user={isLoggedIn}>
							<Home />
						</RedirectedRoute>
					}
				/>

				<Route
					path="/login"
					element={
						<RedirectedRoute user={isLoggedIn}>
							<Login />
						</RedirectedRoute>
					}
				/>
				<Route
					path="/register"
					element={
						<RedirectedRoute user={isLoggedIn}>
							<Register />
						</RedirectedRoute>
					}
				/>
				<Route
					path="/notes"
					element={
						<ProtectedRoute user={isLoggedIn}>
							<Notes />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</AllPagesWrapper>
	);
};
