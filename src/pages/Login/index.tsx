import { Link } from 'react-router-dom';

import { SignIn } from '../../components';

export const Login = () => {
  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold mb-3'>Login</h1>
      <SignIn />
      <p className='mt-3'>
        Or{' '}
        <Link
          to='/register'
          className='font-semibold border-b border-dashed border-black'
        >
          register
        </Link>
      </p>
    </div>
  );
};
