import React from 'react';
import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';
import { CommonStyles } from '../../theme';
import styles from './styles';
import { CartItem, EmptyList } from '../../components';
import { CartText } from '../../strings';
import { useCart } from './Hooks';

const CartPage = () => {
  const { cartProducts, onRemoveFromCartPressed } = useCart();
  return (
    <View style={[CommonStyles.flex, styles.container]}>
      <View style={styles.headingContainer}>
        <Text variant="headlineSmall">{CartText.productsInCart}</Text>
      </View>
      <FlatList
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        data={cartProducts}
        renderItem={({ item }) => (
          <CartItem
            productName={item.title}
            productPrice={item.price}
            productImageUri={item.images[0] ?? ''}
            onRemovePressed={() => onRemoveFromCartPressed(item.id)}
          />
        )}
        ListEmptyComponent={() => <EmptyList />}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

export default React.memo(CartPage);
