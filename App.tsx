import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/root/RootNavigaitor';
import {default as color} from './src/styles/colors.json';
import {ThemeContext} from './src/context/theme-context';

function App(): React.JSX.Element {
  const [theme, setCurrentTheme] = React.useState<'light' | 'dark' | 'mapping'>(
    'light',
  );
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setCurrentTheme(nextTheme);
  };
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider {...eva} theme={{...eva[theme], ...color}}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
