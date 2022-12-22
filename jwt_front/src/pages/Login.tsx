import React, { FormEvent, useState } from 'react';
import { useAppDispatch } from '../store';
import { loginUser } from '../store/actionCreators';

export const Login = () => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(loginUser({ login, password }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name='login'
            type='text'
            placeholder='Login'
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />
        </div>
        <div>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
