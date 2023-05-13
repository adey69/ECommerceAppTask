import React from 'react';
import { TouchableOpacity } from 'react-native';
import VectorIcons, { ICON_TYPES } from '../VectorIcons';
import { CommonStyles } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const HeaderBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      hitSlop={CommonStyles.hitSlop}
      style={styles.container}
      onPress={navigation.goBack}>
      <VectorIcons
        name="chevron-back"
        iconType={ICON_TYPES.Ionicons}
        size={24}
      />
    </TouchableOpacity>
  );
};

export default React.memo(HeaderBack);
