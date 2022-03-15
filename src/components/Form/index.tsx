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
    <div>
      <input
        type='email'
        value={email}
        onChange={onEmailChange}
        placeholder='email'
      />
      <input
        type='password'
        value={pass}
        onChange={onPassChange}
        placeholder='password'
      />
      <button onClick={onBtnClick} type='button'>
        {title}
      </button>
    </div>
  );
};
