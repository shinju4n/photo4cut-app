import React from 'react';
import {
  NavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddMediaScreen from '@/screens/album/AddMediaScreen';
import AlbumScreen from '@/screens/album/AlbumHomeScreen';
import {AlbumRoutes} from '@/constants/index';
import AlbumDetailScreen from '@/screens/album/AlbumDetailScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {BottomTabParamList} from '../bottom-tabs/BottomTabsNavigator';
import {ScreenStackProps} from 'react-native-screens';

export type AlbumStackParamList = {
  [AlbumRoutes.ALBUM_HOME]: undefined;
  [AlbumRoutes.ADD_MEDIA]: undefined;
  [AlbumRoutes.ALBUM_DETAIL]: {id: number};
};

const Stack = createStackNavigator<AlbumStackParamList>();

type AlbumStackNavigatorProps = {
  navigation: NavigationProp<BottomTabParamList>;
  route: RouteProp<BottomTabParamList, keyof BottomTabParamList>;
};

const AlbumStackNavigator = ({navigation, route}: AlbumStackNavigatorProps) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === AlbumRoutes.ALBUM_DETAIL) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      initialRouteName={AlbumRoutes.ALBUM_HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AlbumRoutes.ALBUM_HOME} component={AlbumScreen} />
      <Stack.Screen name={AlbumRoutes.ADD_MEDIA} component={AddMediaScreen} />
      <Stack.Screen
        name={AlbumRoutes.ALBUM_DETAIL}
        component={AlbumDetailScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};

export default AlbumStackNavigator;
