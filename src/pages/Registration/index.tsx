import { Link } from 'react-router-dom';

import { SignUp } from '../../components';

export const Registration = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />
      <p>
        Already have an account? <Link to='/login'>Sign in</Link>
      </p>
    </div>
  );
};
