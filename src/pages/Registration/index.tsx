import { Link } from 'react-router-dom';

import { SignUp } from '../../components';

export const Registration = () => {
  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold mb-3'>Register</h1>
      <SignUp />
      <p className='mt-3'>
        Already have an account?{' '}
        <Link
          to='/login'
          className='font-semibold border-b border-dashed border-black'
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};
