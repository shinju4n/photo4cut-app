import {ResponseToken, requestLogin} from '@/api/auth';
import queryClient from '@/api/query-client';
import {queryKeys, storageKeys} from '@/constants/keys';
import {UseMutationCustomOptions} from '@/types/common';
import {setEncryptedStorage} from '@/utils/encryptedStorage';
import {setHeader} from '@/utils/header';
import {MutationFunction, useMutation} from '@tanstack/react-query';

function useLogin<T>(
  loginAPI: MutationFunction<ResponseToken, T>,
  mutationOptions?: UseMutationCustomOptions,
) {
  return useMutation({
    mutationFn: loginAPI,
    onSuccess: ({accessToken, refreshToken}) => {
      console.log('accessToken', accessToken);
      setEncryptedStorage(storageKeys.REFRESH_TOKEN, refreshToken);
      setHeader('Authorization', `Bearer ${accessToken}`);
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

function useAuth() {
  const loginMutation = useEmailLogin();

  return {loginMutation};
}
export default useAuth;
