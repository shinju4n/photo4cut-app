import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';

function App(): React.JSX.Element {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">HOME</Text>
      </Layout>
    </ApplicationProvider>
  );
}

export default App;
