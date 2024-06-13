import React from 'react';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {validateEmail} from '@/constants/validate';
import {authAlerts} from '@/constants';
import useAuth from '@/hooks/useAuth';

type LoginFormType = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const {loginMutation, getProfileQuery} = useAuth();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormType>();

  const requestLogin = (data: LoginFormType) => {
    loginMutation.mutate(data);
  };

  const onSubmit = handleSubmit(data => requestLogin(data));

  return (
    <Layout style={styles.container}>
      <SafeAreaView>
        <Text category="h4" style={styles.welcomeText}>
          사진네컷에 오신걸 환영합니다.
        </Text>
        <Layout style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: authAlerts.REQUIRED_EMAIL,
              },
              pattern: {
                value: validateEmail,
                message: authAlerts.INVALID_EMAIL,
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="이메일을 입력하세요."
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                status={errors.email ? 'danger' : 'basic'}
                caption={errors.email ? errors.email.message : ''}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: authAlerts.REQUIRED_PASSWORD,
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="비밀번호를 입력하세요"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
                status={errors.password ? 'danger' : 'basic'}
                caption={errors.password ? errors.password.message : ''}
              />
            )}
            name="password"
          />
        </Layout>
        <Layout style={styles.buttonContainer}>
          <Button onPress={onSubmit}>로그인</Button>
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
    marginVertical: 5,
    gap: 20,
  },
  buttonContainer: {
    marginTop: 20,
    gap: 15,
  },
});

export default LoginScreen;
