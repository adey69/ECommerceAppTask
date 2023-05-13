import React from 'react';
import {
  GestureResponderEvent,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../assets';
import styles from './styles';
import { Text } from 'react-native-paper';
import { CommonStyles } from '../../theme';
import { CartText } from '../../strings';
import RemoteImage from '../RemoteImage';

interface ICartItemProps {
  productName: string;
  productPrice: string;
  productImageUri: string;
  onRemovePressed: (event: GestureResponderEvent) => void;
}

const CartItem = (props: ICartItemProps) => {
  const { productName, productPrice, productImageUri, onRemovePressed } = props;
  return (
    <View style={[CommonStyles.flex, styles.container]}>
      <View style={styles.leftContainer}>
        <RemoteImage
          source={{ uri: productImageUri ?? '' }}
          defaultSource={Images.placeholderImage}
          resizeMode="contain"
          style={styles.productImage}
          size={25}
        />
        <View style={styles.detailsContainer}>
          <Text>{productName}</Text>
          <Text>{productPrice}</Text>
        </View>
      </View>
      <TouchableOpacity
        hitSlop={CommonStyles.hitSlop}
        onPress={onRemovePressed}>
        <Text style={styles.quantity}>{CartText.remove}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(CartItem);
