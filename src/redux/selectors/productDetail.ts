import { createSelector } from '@reduxjs/toolkit';

export const productDetailSelector = createSelector(
  (state: IRootState) => state.productDetail,
  state => state,
);
