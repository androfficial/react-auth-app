import { Link } from 'react-router-dom';

import { SignIn } from '../../components';

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <SignIn />
      <p>
        Or <Link to='/register'>register</Link>
      </p>
    </div>
  );
};
