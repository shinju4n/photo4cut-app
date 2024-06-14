import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@/screens/auth/LoginScreen';
import {AuthRoutes} from '@/constants/index';
import SignUpScreen from '@/screens/auth/SignUpScreen';

export type AuthStackParamList = {
  [AuthRoutes.LOGIN]: undefined;
  [AuthRoutes.SIGN_UP]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthRoutes.LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AuthRoutes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={AuthRoutes.SIGN_UP} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
