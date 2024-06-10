import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';

interface HomeScreenProps {}

function HomeScreen({}: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.layout}>
        <Text category="h1">안녕하세요</Text>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
