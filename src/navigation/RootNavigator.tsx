import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import PrimaryNavigator from './PrimaryNavigator';
import { SafeAreaView } from 'react-native';
import { useAppSelector } from '../redux/hooks';
import { authSelector } from '../redux/selectors';

const RootNavigator = () => {
  const { user } = useAppSelector(authSelector);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {!!user?.token ? <PrimaryNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;
