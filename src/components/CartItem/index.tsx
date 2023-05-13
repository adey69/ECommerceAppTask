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

interface ICartItemProps {
  productName: string;
  productPrice: string;
  onRemovePressed: (event: GestureResponderEvent) => void;
}

const CartItem = (props: ICartItemProps) => {
  const { productName, productPrice, onRemovePressed } = props;
  return (
    <View style={[CommonStyles.flex, styles.container]}>
      <View style={styles.leftContainer}>
        <Image source={Images.dummyPhone} style={styles.productImage} />
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
