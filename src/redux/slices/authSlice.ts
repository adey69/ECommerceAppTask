import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from '../../api';

const INITIAL_STATE: IAuthState = {
  user: undefined,
  isLoading: false,
  error: undefined,
};

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (payload: ILoginRequest) => {
    const user = await login(payload);
    return user;
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    logout: state => ({ ...state, user: undefined }),
  },
  extraReducers: builder => {
    builder.addCase(getUser.pending, state => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.code;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.user = action.payload.data;
    });
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
