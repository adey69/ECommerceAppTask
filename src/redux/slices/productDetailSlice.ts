import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductById } from '../../api';

const INITIAL_STATE: IProductDetailState = {
  product: undefined,
  isLoading: false,
  error: undefined,
};

export const getSingleProduct = createAsyncThunk(
  'products/getSingleProduct',
  async (id: number) => {
    const product = await getProductById(id);
    return product;
  },
);

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSingleProduct.pending, state => {
      state.product = undefined;
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(getSingleProduct.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.code,
    }));
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.product = action.payload.data;
    });
  },
});

export default productDetailSlice.reducer;
