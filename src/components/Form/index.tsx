import { ChangeEvent, useState } from 'react';

interface IFormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

export const Form = ({ title, handleClick }: IFormProps) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const onPassChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPass(e.target.value);

  const onBtnClick = () => handleClick(email, pass);

  return (
    <div className='flex'>
      <input
        type='email'
        value={email}
        onChange={onEmailChange}
        placeholder='email'
        className='grow-0 shrink-0 basis-52 border	border-solid border-black rounded mr-3 p-2'
      />
      <input
        type='password'
        value={pass}
        onChange={onPassChange}
        placeholder='password'
        className='grow-0 shrink-0 basis-52 border	border-solid border-black rounded mr-3 p-2'
      />
      <button
        onClick={onBtnClick}
        className='grow-0 shrink-0 basis-20	w-20 border border-solid border-black text-black capitalize rounded inline-flex items-center justify-center px-1 hover:bg-black hover:text-white transition-all'
        type='button'
      >
        {title}
      </button>
    </div>
  );
};
