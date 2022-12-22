import React from 'react';
import { Login } from './Login';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from '../store';
import { getProfile, logoutUser } from '../store/actionCreators';

export const Main = () => {
  const dispatch = useAppDispatch();

  const profile = useSelector(
      (state: IRootState) => state.auth.profileData.profile
  );
  
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const renderProfile = () => (
      <div>
          <div>Вы успешно авторизовались, {profile}!</div>
          <button onClick={() => dispatch(logoutUser())}>Logout</button>
          <button onClick={() => dispatch(getProfile())}>
              Update profile
          </button>
      </div>
  );

  return (
    <div>
      <h1>Main</h1>
      {isLoggedIn ? renderProfile() : <Login />}
    </div>
  );
};
