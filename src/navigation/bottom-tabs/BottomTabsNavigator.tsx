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

export type BottomTabParamList = {
  [BottomTabRoutes.HOME]: undefined;
  [BottomTabRoutes.ALBUM]: undefined;
};

const {Navigator, Screen} = createBottomTabNavigator<BottomTabParamList>();

const BottomTabBar = ({navigation, state}: BottomTabBarProps) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="홈" icon={<CustomIcon name="home-outline" />} />
    <BottomNavigationTab
      title="사진첩"
      icon={<CustomIcon name="image-outline" />}
    />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={BottomTabBar}>
    <Screen
      name={BottomTabRoutes.HOME}
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name={BottomTabRoutes.ALBUM}
      component={PhotoAlbumNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);

const BottomTabsNavigator = (): React.ReactElement => {
  return <TabNavigator />;
};

export default BottomTabsNavigator;
