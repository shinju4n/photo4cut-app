import React from 'react';
import {
  createBottomTabNavigator,
  type BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import PhotoAlbumNavigator from '@/navigation/stack/AlbumNavigator';
import HomeScreen from '@/screens/HomeScreen';
import {BottomTabRoutes} from '@/constants/index';
import CustomIcon from '@/components/CustomIcon';
import SettingScreen from '@/screens/setting/SettingScreen';

export type BottomTabParamList = {
  [BottomTabRoutes.HOME]: undefined;
  [BottomTabRoutes.ALBUM]: undefined;
  [BottomTabRoutes.SETTING]: undefined;
};

const {Navigator, Screen} = createBottomTabNavigator<BottomTabParamList>();

const BottomTabBar = ({navigation, state, ...props}: BottomTabBarProps) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}
      {...props}>
      <BottomNavigationTab
        title="홈"
        icon={<CustomIcon name="home-outline" />}
      />
      <BottomNavigationTab
        title="사진첩"
        icon={<CustomIcon name="image-outline" />}
      />
    </BottomNavigation>
  );
};

const BottomTabsNavigator = ({}) => {
  return (
    <Navigator
      // tabBar={BottomTabBar}
      initialRouteName={BottomTabRoutes.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={BottomTabRoutes.HOME} component={HomeScreen} />
      <Screen name={BottomTabRoutes.ALBUM} component={PhotoAlbumNavigator} />
      <Screen name={BottomTabRoutes.SETTING} component={SettingScreen} />
    </Navigator>
  );
};

export default BottomTabsNavigator;
