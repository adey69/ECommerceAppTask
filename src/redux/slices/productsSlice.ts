import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../../api';

const INITIAL_STATE: IProductsState = {
  products: [],
  isLoading: false,
  error: undefined,
  limit: undefined,
  skip: undefined,
  total: undefined,
};

export const getProducts = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    const products = await getAllProducts();
    return products;
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.isLoading = true;
      state.error = undefined;
      state.limit = undefined;
      state.total = undefined;
      state.skip = undefined;
    });
    builder.addCase(getProducts.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }));
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.products = action.payload.data.products;
      state.limit = action.payload.data.limit;
      state.total = action.payload.data.total;
      state.skip = action.payload.data.skip;
    });
  },
});

export default productsSlice.reducer;
