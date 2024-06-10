import React from 'react';
import {
  createBottomTabNavigator,
  type BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import HomeScreen from '../../screens/HomeScreen';
import MediaHomeScreen from '../../screens/media/MediaHomeScreen';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}: BottomTabBarProps) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="홈" />
    <BottomNavigationTab title="미디어" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={BottomTabBar}>
    <Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="Media"
      component={MediaHomeScreen}
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
