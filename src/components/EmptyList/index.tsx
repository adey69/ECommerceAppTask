import React from 'react';
import { View } from 'react-native';
import { CommonStyles } from '../../theme';
import { Text } from 'react-native-paper';
import { ProductsListText } from '../../strings';

const EmptyList = () => {
  return (
    <View style={[CommonStyles.flex, CommonStyles.centerContent]}>
      <Text>{ProductsListText.noProducts}</Text>
    </View>
  );
};

export default React.memo(EmptyList);
