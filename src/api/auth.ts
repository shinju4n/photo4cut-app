import {Auth} from '@/types';
import axiosInstance from './axios';

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

export {requestLogin};
export type {ResponseToken};
