import React from 'react';

export const ThemeContext = React.createContext<{
  theme: 'light' | 'dark' | 'mapping';
  toggleTheme: () => void;
}>({
  theme: 'light',
  toggleTheme: () => {},
});
