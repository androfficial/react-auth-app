import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/store';
import { setUser } from '../../store/slices/userSlice';
import { Form } from '../Form';

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      dispatch(
        setUser({
          email: user.email as string,
          id: user.uid,
          token: user.refreshToken,
        })
      );
      navigate('/');
    } catch (error) {
      alert('Invalid user!');
    }
  };

  return <Form title='sign in' handleClick={handleLogin} />;
};
