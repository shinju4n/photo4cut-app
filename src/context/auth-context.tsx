import React from 'react';

export const AuthContext = React.createContext<{
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}>({
  isLogin: false,
  setIsLogin: () => {},
});
