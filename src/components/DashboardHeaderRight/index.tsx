import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { VectorIcon } from '../../components';
import { ICON_TYPES } from '../VectorIcons';
import { CommonStyles } from '../../theme';
import styles from './styles';
import { useDashboardHeaderRight } from './Hooks';

const DashboardHeaderRight = () => {
  const { onCartPressed, onLogoutPressed } = useDashboardHeaderRight();
  return (
    <View style={[CommonStyles.flexRow, styles.container]}>
      <TouchableOpacity
        style={styles.logoutIcon}
        onPress={onLogoutPressed}
        hitSlop={CommonStyles.hitSlop}>
        <VectorIcon
          name="logout"
          iconType={ICON_TYPES.MaterialIcons}
          size={22}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutIcon}
        onPress={onCartPressed}
        hitSlop={CommonStyles.hitSlop}>
        <VectorIcon
          name="cart-outline"
          iconType={ICON_TYPES.Ionicons}
          size={22}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(DashboardHeaderRight);
