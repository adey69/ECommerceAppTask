import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: ICartState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addProductToCart: (state, { payload }: PayloadAction<IProduct>) => {
      return { ...state, cartProducts: [...state.cartProducts, payload] };
    },
    removeProductFromCart: (state, { payload: id }: PayloadAction<number>) => {
      return {
        ...state,
        cartProducts: state.cartProducts.filter(product => product.id !== id),
      };
    },
  },
});

export default cartSlice.reducer;
export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
