import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage } from '../screens';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginPage} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
