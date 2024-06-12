import React from 'react';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet} from 'react-native';

const LoginScreen = () => {
  return (
    <Layout style={styles.container}>
      <SafeAreaView>
        <Text category="h4" style={styles.welcomeText}>
          사진네컷에 오신걸 환영합니다.
        </Text>
        <Layout style={styles.inputContainer}>
          <Input placeholder="아이디" />
          <Input placeholder="비밀번호" secureTextEntry />
        </Layout>
        <Layout style={styles.buttonContainer}>
          <Button>로그인</Button>
          <Button appearance="outline" onPress={() => console.log('hi')}>
            회원가입
          </Button>
        </Layout>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    gap: 20,
  },
  buttonContainer: {
    marginTop: 20,
    gap: 15,
  },
});

export default LoginScreen;
