import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';

interface IFilterButtonProps {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
}

const FilterButton = (props: IFilterButtonProps) => {
  const { label, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.5}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(FilterButton);
