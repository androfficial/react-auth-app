import { Route, Routes } from 'react-router-dom';

import { Home, Login, Registration } from './pages';

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center	max-w-screen-sm m-auto h-screen'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
