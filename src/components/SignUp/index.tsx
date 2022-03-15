import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/store';
import { setUser } from '../../store/slices/userSlice';
import { Form } from '../Form';

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = async (email: string, password: string) => {
    const auth = getAuth();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
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
      console.log(error);
    }
  };

  return <Form title='register' handleClick={handleRegister} />;
};
