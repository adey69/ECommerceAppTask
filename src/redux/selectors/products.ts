import { createSelector } from '@reduxjs/toolkit';

export const productsSelector = createSelector(
  (state: IRootState) => state.products,
  state => state,
);
