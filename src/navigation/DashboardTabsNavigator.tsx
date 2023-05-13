import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardHeaderRight, VectorIcon } from '../components';
import { ICON_TYPES } from '../components/VectorIcons';
import { ProductsListPage, UserDetailsPage } from '../screens';
import { AppText } from '../strings';
import { Alignment, Colors } from '../theme';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const renderHomeIcon = useCallback(
    (focused: boolean) => (
      <VectorIcon
        name="home"
        iconType={ICON_TYPES.MaterialIcons}
        size={28}
        color={focused ? Colors.borderGreen : Colors.placeholderGrey}
      />
    ),
    [],
  );
  const renderUserIcon = useCallback(
    (focused: boolean) => (
      <VectorIcon
        name="user"
        iconType={ICON_TYPES.EvilIcons}
        size={28}
        color={focused ? Colors.borderGreen : Colors.placeholderGrey}
      />
    ),
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitle: AppText.eCommerce,
        headerRight: () => <DashboardHeaderRight />,
        tabBarItemStyle: {
          ...Alignment.MBxSmall,
        },
        tabBarActiveTintColor: Colors.borderGreen,
      }}>
      <Tab.Screen
        name="ProductsList"
        component={ProductsListPage}
        options={{
          tabBarIcon: ({ focused }) => renderHomeIcon(focused),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="User"
        component={UserDetailsPage}
        options={{
          tabBarIcon: ({ focused }) => renderUserIcon(focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default React.memo(BottomTabs);
