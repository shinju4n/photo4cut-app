import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/root/RootNavigator';
import {default as color} from './src/styles/colors.json';
import {ThemeContext} from './src/context/theme-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const [theme, setCurrentTheme] = React.useState<'light' | 'dark' | 'mapping'>(
    'dark',
  );
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setCurrentTheme(nextTheme);
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          <ApplicationProvider {...eva} theme={{...eva[theme], ...color}}>
            <NavigationContainer>
              <RootNavigator />
              <Toast />
            </NavigationContainer>
          </ApplicationProvider>
        </ThemeContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
