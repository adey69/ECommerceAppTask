import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getProducts } from '../../../redux/slices/productsSlice';
import { productsSelector } from '../../../redux/selectors';

export default () => {
  const navigation = useNavigation<IPrimaryStackNavigationProp>();
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(productsSelector);
  const [productsToShow, setProductsToShow] = useState(products);

  const fetchProducts = useCallback(() => {
    dispatch(getProducts());
  }, []);

  const sanitizeText = useCallback((text: string): string => {
    text.trim().replace(/([.*+?=^!:${}()^[]|[\]/\\])/g, '');
    return text.replace(/\s/g, '');
  }, []);

  const onSearch = useCallback(
    (searchStr: string) => {
      const searchText = sanitizeText(searchStr).toLowerCase();
      if (searchText.length > 0) {
        setProductsToShow(
          products.filter(product => {
            const sanitizedTitle = sanitizeText(product.title).toLowerCase();
            return sanitizedTitle.includes(searchText);
          }),
        );
      } else {
        setProductsToShow(products);
      }
    },
    [products],
  );

  const onRefresh = useCallback(() => {
    fetchProducts();
  }, []);

  const onPressProductItem = useCallback((id: number) => {
    navigation.navigate('ProductDetail', {
      id,
    });
  }, []);

  const onLowToHighFilterSelected = useCallback(() => {
    const tempProductsArr = [...productsToShow];
    setProductsToShow(
      tempProductsArr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)),
    );
  }, [productsToShow]);

  const onHighToLowFilterSelected = useCallback(() => {
    const tempProductsArr = [...productsToShow];
    setProductsToShow(
      tempProductsArr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)),
    );
  }, [productsToShow]);

  const clearFilter = useCallback(() => {
    setSearchInput('');
    setProductsToShow(products);
  }, [products]);

  useEffect(() => {
    setProductsToShow(products);
  }, [products]);

  return {
    navigation,
    products,
    isLoading,
    error,
    searchInput,
    productsToShow,
    onLowToHighFilterSelected,
    onHighToLowFilterSelected,
    clearFilter,
    setSearchInput,
    onSearch,
    onRefresh,
    onPressProductItem,
    fetchProducts,
  };
};
