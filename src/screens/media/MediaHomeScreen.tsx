import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';

interface MediaHomeScreenProps {}

const MediaHomeScreen = ({}: MediaHomeScreenProps) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">미디어</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default MediaHomeScreen;
