import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';

interface HomeScreenProps {}

function HomeScreen({}: HomeScreenProps) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">안녕하세요</Text>
      </Layout>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({});

export default HomeScreen;
