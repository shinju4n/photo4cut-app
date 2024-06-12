import React from 'react';
import BottomTabsNavigator from '../bottom-tabs/BottomTabsNavigator';
import AuthStackNavigator from '../stack/AuthStackNavigator';

function RootNavigator() {
  const isLogin = false;
  return isLogin ? <BottomTabsNavigator /> : <AuthStackNavigator />;
}

export default RootNavigator;
