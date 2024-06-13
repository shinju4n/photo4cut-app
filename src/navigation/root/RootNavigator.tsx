import React from 'react';
import BottomTabsNavigator from '../bottom-tabs/BottomTabsNavigator';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import useAuth from '@/hooks/useAuth';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

export type RootStackParamList = {
  BottomTabsNavigator: undefined;
  AuthStackNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const {isLogin} = useAuth();

  return (
    <Stack.Navigator>
      {isLogin ? (
        <Stack.Group>
          <Stack.Screen
            name="BottomTabsNavigator"
            component={BottomTabsNavigator}
            options={{headerShown: false, animationTypeForReplace: 'push'}}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="AuthStackNavigator"
            component={AuthStackNavigator}
            options={{
              headerShown: false,
              animationTypeForReplace: 'pop',
            }}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

export default RootNavigator;
