import React from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import RemoteImage from '../RemoteImage';

interface IProductsListItemProps {
  sourceUri: string;
  productName: string;
  price: string;
  onPress: (event: GestureResponderEvent) => void;
}

const ProductsListItem = (props: IProductsListItemProps) => {
  const { price, productName, sourceUri, onPress } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={onPress}>
      <RemoteImage
        source={{ uri: sourceUri ?? '' }}
        resizeMode="contain"
        style={styles.productImage}
        size={25}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.productName} numberOfLines={2}>
          {productName}
        </Text>
        <Text style={styles.productPrice}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ProductsListItem);
