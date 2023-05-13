import React, { useCallback, useEffect } from 'react';
import { FlatList, RefreshControl, TextInput, View } from 'react-native';
import { Alignment, CommonStyles } from '../../theme';
import styles from './styles';
import {
  FilterButton,
  Loader,
  ProductsListItem,
  VectorIcon,
} from '../../components';
import { ICON_TYPES } from '../../components/VectorIcons';
import { ErrorText, ProductsListText } from '../../strings';
import { useProductsList } from './Hooks';
import EmptyList from '../../components/EmptyList';
import { Text } from 'react-native-paper';

const ProductsListPage = () => {
  const {
    isLoading,
    productsToShow,
    error,
    searchInput,
    setSearchInput,
    onRefresh,
    fetchProducts,
    onPressProductItem,
    onSearch,
    onLowToHighFilterSelected,
    onHighToLowFilterSelected,
    clearFilter,
  } = useProductsList();

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProductItem = useCallback((item: IProduct, index: number) => {
    return (
      <View style={[styles.listItem, { marginLeft: index % 2 !== 0 ? 20 : 0 }]}>
        <ProductsListItem
          sourceUri={item?.images[0]}
          price={`$${item?.price ?? 'N/A'}`}
          productName={`${item?.title ?? 'N/A'}`}
          onPress={() => onPressProductItem(item.id)}
        />
      </View>
    );
  }, []);

  if (error) {
    return (
      <View
        style={[
          CommonStyles.flex,
          styles.container,
          CommonStyles.centerContent,
        ]}>
        <Text>{ErrorText.errorFetchingProducts}</Text>
      </View>
    );
  }

  return (
    <View style={[CommonStyles.flex, styles.container]}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInnerContainer}>
          <TextInput
            value={searchInput}
            onChangeText={text => {
              setSearchInput(text);
              onSearch(text);
            }}
            style={styles.searchField}
            placeholder={ProductsListText.search}
          />
          <View style={Alignment.MRmedium}>
            <VectorIcon
              name="search"
              iconType={ICON_TYPES.Fontisto}
              size={20}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <FilterButton label="Low to High" onPress={onLowToHighFilterSelected} />
        <FilterButton label="High to Low" onPress={onHighToLowFilterSelected} />
        <FilterButton label="Clear Filter" onPress={clearFilter} />
      </View>
      <FlatList
        data={productsToShow}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => renderProductItem(item, index)}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={isLoading} />
        }
        ListEmptyComponent={() => <EmptyList />}
      />
      {isLoading && <Loader animating={isLoading} />}
    </View>
  );
};

export default React.memo(ProductsListPage);
