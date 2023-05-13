import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface IRoundedButtonProps {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

const RoundedButton = (props: IRoundedButtonProps) => {
  const { label, onPress, style } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[style, styles.container]}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(RoundedButton);
