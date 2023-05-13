import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { cartSelector, productDetailSelector } from '../../../redux/selectors';
import { getSingleProduct } from '../../../redux/slices/productDetailSlice';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../../redux/slices/cartSlice';

export default () => {
  const { product, isLoading, error } = useAppSelector(productDetailSelector);
  const { cartProducts } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();
  const fetchProduct = useCallback((id: number) => {
    dispatch(getSingleProduct(id));
  }, []);

  const isInCart = useMemo(() => {
    return cartProducts.some(cartProduct => product?.id === cartProduct.id);
  }, [cartProducts, product]);

  const onRemoveFromCartPressed = useCallback(
    (id: number) => {
      if (product) {
        dispatch(removeProductFromCart(id));
      }
    },
    [product],
  );

  const onAddToCartPressed = useCallback(
    (product: IProduct | undefined) => {
      if (product) {
        dispatch(addProductToCart(product));
      }
    },
    [product],
  );

  const onButtonPressed = useCallback(
    (product: IProduct | undefined) => {
      isInCart
        ? onRemoveFromCartPressed(product!.id)
        : onAddToCartPressed(product);
    },
    [isInCart],
  );

  return {
    product,
    isLoading,
    error,
    isInCart,
    fetchProduct,
    onButtonPressed,
  };
};
