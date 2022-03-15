import { useAppSelector } from './store';

export const useAuth = () => {
  const { id, email, token } = useAppSelector((state) => state.user);

  return {
    isAuth: !!id,
    id,
    email,
    token,
  };
};
