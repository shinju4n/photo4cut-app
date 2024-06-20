import React, {useEffect} from 'react';
import BottomTabsNavigator from '../bottom-tabs/BottomTabsNavigator';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import useAuth from '@/hooks/useAuth';
import {NavigationContainer} from '@react-navigation/native';

function RootNavigator() {
  const {isLogin, isLoginLoading} = useAuth();

  // useEffect(() => {
  //   if (!isLoginLoading) {
  //     setTimeout(() => {
  //       SplashScreen.hide();
  //     }, 500);
  //   }
  // }, [isLoginLoading]);

  return (
    <NavigationContainer>
      {isLogin ? <BottomTabsNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
