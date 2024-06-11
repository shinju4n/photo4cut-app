import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddMediaScreen from '@/screens/album/AddMediaScreen';
import AlbumScreen from '@/screens/album/AlbumHomeScreen';
import {AlbumRoutes} from '@/constants/index';

export type AlbumStackParamList = {
  [AlbumRoutes.ALBUM_HOME]: undefined;
  [AlbumRoutes.ADD_MEDIA]: undefined;
};

const Stack = createStackNavigator<AlbumStackParamList>();

const AlbumStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AlbumRoutes.ALBUM_HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AlbumRoutes.ALBUM_HOME} component={AlbumScreen} />
      <Stack.Screen name={AlbumRoutes.ADD_MEDIA} component={AddMediaScreen} />
    </Stack.Navigator>
  );
};

export default AlbumStackNavigator;
