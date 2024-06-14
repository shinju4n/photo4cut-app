import React, {useEffect} from 'react';
import BottomTabsNavigator from '../bottom-tabs/BottomTabsNavigator';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import useAuth from '@/hooks/useAuth';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import useAuthStore from '@/store/auth-store';
import SplashScreen from 'react-native-splash-screen';

export type RootStackParamList = {
  BottomTabsNavigator: undefined;
  AuthStackNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const {isLogin, isLoginLoading} = useAuth();

  useEffect(() => {
    if (!isLoginLoading) {
      setTimeout(() => {
        SplashScreen.hide();
      }, 500);
    }
  }, [isLoginLoading]);

  return (
    <Stack.Navigator>
      {isLogin ? (
        <Stack.Group>
          <Stack.Screen
            name="BottomTabsNavigator"
            component={BottomTabsNavigator}
            options={{headerShown: false}}
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
