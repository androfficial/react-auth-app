import { Navigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/store';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';

export const Home = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();

  const onRemoveBtnClick = () => dispatch(removeUser());

  return isAuth ? (
    <div>
      <h1 className='text-2xl font-bold'>Welcome</h1>

      <button onClick={onRemoveBtnClick} type='button'>
        Log out from <span className='italic'>{email}</span>
      </button>
    </div>
  ) : (
    <Navigate to='/login' />
  );
};
