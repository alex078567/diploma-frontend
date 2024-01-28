import { configureStore } from '@reduxjs/toolkit';
import authSlice from 'src/features/auth/authSlice';

// создание стора, хранящего глобальное состояние (state) приложения
export const store = configureStore({
	reducer: {
		auth: authSlice,
	},
});

// здесь происходит настройка типов необходимая для работы React Redux Toolkit с typescript

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
