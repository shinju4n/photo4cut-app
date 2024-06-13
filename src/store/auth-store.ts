import {create} from 'zustand';

interface AuthState {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const useAuthStore = create<AuthState>()(set => ({
  isLogin: false,
  setIsLogin: isLogin => set({isLogin}),
}));

export default useAuthStore;
