import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardTabsNavigator from './DashboardTabsNavigator';
import { CartPage, ProductDetailPage } from '../screens';
import { CartText, ProductDetailsText } from '../strings';
import { HeaderBack, ProductDetailHeaderRight } from '../components';

const PrimaryStack = createStackNavigator<PrimaryStackParamList>();

const PrimaryNavigator = () => {
  return (
    <PrimaryStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <PrimaryStack.Screen
        name="Dashboard"
        component={DashboardTabsNavigator}
      />
      <PrimaryStack.Screen
        name="ProductDetail"
        component={ProductDetailPage}
        options={{
          headerShown: true,
          headerTitle: ProductDetailsText.productDetail,
          headerLeft: () => <HeaderBack />,
          headerRight: () => <ProductDetailHeaderRight />,
        }}
      />
      <PrimaryStack.Screen
        name="Cart"
        component={CartPage}
        options={{
          headerShown: true,
          headerTitle: CartText.yourCart,
          headerLeft: () => <HeaderBack />,
        }}
      />
    </PrimaryStack.Navigator>
  );
};

export default PrimaryNavigator;
