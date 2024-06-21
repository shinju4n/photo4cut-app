import React from 'react';
import {Input, Layout, Text, Button} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {authAlerts, validateEmail} from '@/constants';
import useAuth from '@/hooks/useAuth';
import Toast from 'react-native-toast-message';

type SignUpFormType = {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const SignUpScreen = ({}) => {
  const {loginMutation, signUpMutation} = useAuth();
  const {
    getValues,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpFormType>();

  const onSubmit = (value: SignUpFormType) => {
    const {email, password, nickname} = value;
    const data = {email, password, nickname};
    signUpMutation.mutate(data, {
      onSuccess: () => {
        Toast.show({
          type: 'success',
          text1: '회원가입에 성공하였습니다.',
          position: 'bottom',
          visibilityTime: 2000,
        });
        loginMutation.mutate({email, password});
      },
      onError: e =>
        Toast.show({
          type: 'error',
          text1: e.response?.data.message,
          position: 'bottom',
          visibilityTime: 2000,
        }),
    });
  };

  return (
    <Layout style={styles.container}>
      <SafeAreaView>
        <Layout style={styles.titleContainer}>
          <Text category="h4">회원가입</Text>
        </Layout>
        <Layout style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: authAlerts.REQUIRED_NICKNAME,
              },
              minLength: {
                value: 2,
                message: authAlerts.MIN_LENGTH,
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="닉네임을 입력하세요."
                label={'닉네임'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                status={errors.nickname ? 'danger' : 'basic'}
                caption={errors.nickname ? errors.nickname.message : ''}
              />
            )}
            name="nickname"
          />
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
                label={'이메일'}
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
                label={'비밀번호'}
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
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: authAlerts.REQUIRED_PASSWORD,
              },
              validate: value =>
                value === getValues('password') ||
                '비밀번호가 일치하지 않습니다.',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label={'비밀번호 확인'}
                placeholder="비밀번호를 다시 입력하세요."
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
                status={errors.passwordConfirm ? 'danger' : 'basic'}
                caption={
                  errors.passwordConfirm ? errors.passwordConfirm.message : ''
                }
              />
            )}
            name="passwordConfirm"
          />
        </Layout>
        <Button
          onPress={handleSubmit(data => onSubmit(data))}
          style={styles.submitButton}>
          회원 가입하기
        </Button>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
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
  submitButton: {
    marginTop: 20,
  },
});

export default SignUpScreen;
