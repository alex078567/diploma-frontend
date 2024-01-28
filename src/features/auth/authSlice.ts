import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthService } from 'src/shared/api/auth';
import { FormDataI } from 'src/shared/interfaces/interfaces';
import { LoginArgumentsI, LoginReturnI } from './types';

export const register = createAsyncThunk<void, FormDataI>(
	'auth/register',
	async ({ email, password, password_confirm, name, surname }, thunkAPI) => {
		try {
			AuthService.register(email, password, password_confirm, name, surname);
		} catch (e) {
			if (!e.response) {
				throw e;
			}

			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);

export const login = createAsyncThunk<LoginReturnI, LoginArgumentsI>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password);
			return response;
		} catch (e) {
			if (!e.response) {
				throw e;
			}

			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);

export const getUserIdByToken = createAsyncThunk(
	'auth/getUserIdByToken',
	async (_, thunkAPI) => {
		try {
			const response = await AuthService.getUserIdByToken();
			return response;
		} catch (e) {
			if (!e.response) {
				throw e;
			}

			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);

const initialState = {
	isLoggedIn: false,
	userName: '',
	isLoading: false,
	message: '',
	id: '',
	showToast: false,
	toastMessage: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsLoadingTrue(state) {
			state.isLoading = true;
		},
		setIsLoadingFalse(state) {
			state.isLoading = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			(state.isLoggedIn = true), (state.userName = action.payload.name);
			state.id = action.payload.id;
			state.isLoading = false;
		});
		builder.addCase(login.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(login.rejected, (state) => {
			state.isLoggedIn = false;
			state.isLoading = false;
		});

		builder.addCase(getUserIdByToken.fulfilled, (state, action) => {
			(state.isLoggedIn = true), (state.id = action.payload.id);
			state.isLoading = false;
		});
		builder.addCase(getUserIdByToken.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getUserIdByToken.rejected, (state) => {
			state.isLoggedIn = false;
		});
	},
});

const { actions, reducer } = authSlice;

export const { setIsLoadingTrue, setIsLoadingFalse } = actions;

export default reducer;
