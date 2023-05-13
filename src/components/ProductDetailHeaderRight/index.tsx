import React from 'react';
import { VectorIcon } from '../../components';
import { TouchableOpacity } from 'react-native';
import { ICON_TYPES } from '../VectorIcons';
import { CommonStyles } from '../../theme';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const ProductDetailHeaderRight = () => {
  const navigation = useNavigation<IPrimaryStackNavigationProp>();
  return (
    <TouchableOpacity
      hitSlop={CommonStyles.hitSlop}
      style={styles.container}
      onPress={() => navigation.navigate('Cart')}>
      <VectorIcon
        name="cart-outline"
        iconType={ICON_TYPES.Ionicons}
        size={22}
      />
    </TouchableOpacity>
  );
};

export default React.memo(ProductDetailHeaderRight);
