import {
  ResponseProfile,
  ResponseToken,
  getAccessToken,
  getProfile,
  requestLogin,
  requestLogout,
} from '@/api/auth';
import queryClient from '@/api/query-client';
import {numbers} from '@/constants';
import {queryKeys, storageKeys} from '@/constants/keys';
import useAuthStore from '@/store/auth-store';
import {UseMutationCustomOptions, UseQueryCustomOptions} from '@/types/common';
import {
  getEncryptedStorage,
  removeEncryptedStorage,
  setEncryptedStorage,
} from '@/utils/encryptedStorage';
import {removeHeader, setHeader} from '@/utils/header';
import {MutationFunction, useMutation, useQuery} from '@tanstack/react-query';
import {useEffect} from 'react';

function useLogin<T>(
  loginAPI: MutationFunction<ResponseToken, T>,
  mutationOptions?: UseMutationCustomOptions,
) {
  return useMutation({
    mutationFn: loginAPI,
    onSuccess: ({accessToken, refreshToken}) => {
      setEncryptedStorage(storageKeys.REFRESH_TOKEN, refreshToken);
      console.log(getEncryptedStorage(storageKeys.REFRESH_TOKEN));
      setHeader('Authorization', `Bearer ${accessToken}`);
      queryClient.refetchQueries({
        queryKey: [queryKeys.AUTH, queryKeys.GET_PROFILE],
      });
    },
    onSettled: () => {
      queryClient.refetchQueries({
        queryKey: [queryKeys.AUTH, queryKeys.GET_ACCESS_TOKEN],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.AUTH, queryKeys.GET_PROFILE],
      });
    },
    ...mutationOptions,
  });
}

function useEmailLogin(mutationOptions?: UseMutationCustomOptions) {
  return useLogin(requestLogin, mutationOptions);
}

function useGetRefreshToken() {
  const {data, isSuccess, isError, isPending} = useQuery({
    queryKey: [queryKeys.AUTH, queryKeys.GET_ACCESS_TOKEN],
    queryFn: getAccessToken,
    staleTime: numbers.ACCESS_TOKEN_REFRESH_TIME,
    refetchInterval: numbers.ACCESS_TOKEN_REFRESH_TIME,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (isSuccess) {
      setHeader('Authorization', `Bearer ${data.accessToken}`);
      setEncryptedStorage(storageKeys.REFRESH_TOKEN, data.refreshToken);
    }
  }, [data?.accessToken, data?.refreshToken, isSuccess]);

  useEffect(() => {
    if (isError) {
      removeHeader('Authorization');
      removeEncryptedStorage(storageKeys.REFRESH_TOKEN);
    }
  }, [isError]);

  return {isSuccess, isError, isPending};
}

function useGetProfile(queryOptions?: UseQueryCustomOptions<ResponseProfile>) {
  return useQuery({
    queryKey: [queryKeys.AUTH, queryKeys.GET_PROFILE],
    queryFn: getProfile,
    ...queryOptions,
  });
}

function useLogout(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: requestLogout,
    onSuccess: () => {
      removeHeader('Authorization');
      removeEncryptedStorage(storageKeys.REFRESH_TOKEN);
      queryClient.invalidateQueries({
        queryKey: [queryKeys.AUTH, queryKeys.GET_PROFILE],
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: [queryKeys.AUTH]});
      queryClient.removeQueries({
        queryKey: [queryKeys.AUTH, queryKeys.GET_PROFILE],
      });
    },
    ...mutationOptions,
  });
}

function useAuth() {
  const {isLogin, setIsLogin} = useAuthStore();
  const loginMutation = useEmailLogin({
    onSuccess: () => setIsLogin(true),
  });
  const refreshTokenQuery = useGetRefreshToken();
  const getProfileQuery = useGetProfile({
    enabled: refreshTokenQuery.isSuccess,
  });
  const isLoginLoading = refreshTokenQuery.isPending;
  const logoutMutation = useLogout({
    onSuccess: () => setIsLogin(false),
  });

  return {
    loginMutation,
    isLogin,
    getProfileQuery,
    isLoginLoading,
    logoutMutation,
  };
}

export default useAuth;
