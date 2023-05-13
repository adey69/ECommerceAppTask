import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getUser } from '../../../redux/slices/authSlice';
import { ErrorText } from '../../../strings';
import { authSelector } from '../../../redux/selectors';

export default () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { isLoading, error } = useAppSelector(authSelector);

  const onLoginPressed = useCallback(() => {
    let isError = false;
    if (username.length === 0) {
      isError = true;
      setUsernameError(ErrorText.emptyUsernameError);
    }
    if (password.length === 0) {
      isError = true;
      setPasswordError(ErrorText.emptyPasswordError);
    }
    if (!isError) {
      dispatch(getUser({ username, password }));
    }
  }, [username, password, passwordError, usernameError]);

  useEffect(() => {
    if (username.length > 0) {
      setUsernameError('');
    }
    if (password.length > 0) {
      setPasswordError('');
    }
  }, [username, password, usernameError, passwordError]);

  return {
    username,
    password,
    usernameError,
    passwordError,
    isLoading,
    error,
    setUsername,
    setPassword,
    onLoginPressed,
  };
};
