import { createSelector } from '@reduxjs/toolkit';

export const cartSelector = createSelector(
  (state: IRootState) => state.cart,
  state => state,
);
