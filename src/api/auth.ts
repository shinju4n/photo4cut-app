import {Auth, Profile} from '@/types';
import axiosInstance from './axios';
import {getEncryptedStorage} from '@/utils/encryptedStorage';

type RequestSignUp = {
  nickname: string;
  email: string;
  password: string;
};

const requestSignUp = async ({
  nickname,
  email,
  password,
}: RequestSignUp): Promise<void> => {
  const {data} = await axiosInstance.post('/auth/sign-up', {
    nickname,
    email,
    password,
  });

  return data;
};

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

const requestLogin = async ({
  email,
  password,
}: Auth): Promise<ResponseToken> => {
  const {data} = await axiosInstance.post('/auth/login', {
    email,
    password,
  });

  return data;
};

type ResponseProfile = Profile;

const getProfile = async (): Promise<ResponseProfile> => {
  const {data} = await axiosInstance.get('/auth/me');
  return data;
};

const getAccessToken = async (): Promise<ResponseToken> => {
  const refreshToken = await getEncryptedStorage('refreshToken');

  const {data} = await axiosInstance.get('/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return data;
};

const requestLogout = async () => {
  await axiosInstance.post('/auth/logout');
};

export {requestLogin, getProfile, getAccessToken, requestLogout, requestSignUp};
export type {ResponseToken, ResponseProfile, RequestSignUp};
