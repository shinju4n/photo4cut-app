import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import useAuth from '@/hooks/useAuth';
import {Text, Layout, Button} from '@ui-kitten/components';

interface HomeScreenProps {}

function HomeScreen({}: HomeScreenProps) {
  const {logoutMutation, getProfileQuery} = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.layout}>
        <Text category="h1">안녕하세요</Text>
        <Button
          onPress={() =>
            logoutMutation.mutate(null, {
              onSuccess: () => {
                getProfileQuery.refetch();
              },
            })
          }>
          로그아웃
        </Button>
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
  button: {
    margin: 2,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
