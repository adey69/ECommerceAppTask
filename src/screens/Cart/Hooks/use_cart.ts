import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { cartSelector } from '../../../redux/selectors';
import { removeProductFromCart } from '../../../redux/slices/cartSlice';

export default () => {
  const { cartProducts } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();

  const onRemoveFromCartPressed = useCallback((id: number) => {
    dispatch(removeProductFromCart(id));
  }, []);
  return {
    cartProducts,
    onRemoveFromCartPressed,
  };
};
