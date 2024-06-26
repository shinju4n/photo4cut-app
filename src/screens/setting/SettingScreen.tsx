import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import useAuth from '@/hooks/useAuth';
import {Text, Layout, Button} from '@ui-kitten/components';

interface SettingScreenProps {}

function SettingScreen({}: SettingScreenProps) {
  const {logoutMutation, getProfileQuery} = useAuth();

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Layout style={styles.layout}>
          <Text category="h1">안녕하세요 누구누구님</Text>
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
    </Layout>
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

export default SettingScreen;
