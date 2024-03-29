import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { CustomBottomTab } from './custom-bottom-tab';
import { ProfileScreen } from '@/pages/profile.screen';
import { HomeScreen } from '@/pages/home.screen';
import { StoreScreen } from '@/pages/store.screen';
import { RoutesScreen } from '@/pages/routes.screen';

export type BottomTabParamList = {
  HomeTab: undefined;
  RoutesTab: undefined;
  StoreTab: undefined;
  ProfileTab: undefined;
};

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTab {...props} />;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={CustomBottomTabs}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name='HomeTab' component={HomeScreen} />
      <Tab.Screen name='RoutesTab' component={RoutesScreen} />
      <Tab.Screen name='StoreTab' component={StoreScreen} />
      <Tab.Screen name='ProfileTab' component={ProfileScreen} />
    </Tab.Navigator>
  );
};
