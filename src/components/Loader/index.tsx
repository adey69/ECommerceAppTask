import React from 'react';
import { View } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';
import { Colors, CommonStyles } from '../../theme';

interface ILoaderProps {
  animating: boolean;
  size?: number;
}

const Loader = ({ animating, size }: ILoaderProps) => {
  return (
    <View style={CommonStyles.absoluteCentered}>
      <SkypeIndicator
        animating={animating}
        size={size ?? 50}
        color={Colors.borderGreen}
      />
    </View>
  );
};

export default React.memo(Loader);
