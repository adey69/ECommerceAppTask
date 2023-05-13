import { api } from './api';

const login = async ({ username, password }: ILoginRequest) => {
  const res = await api.post('/auth/login', {
    username,
    password,
  });

  return res;
};

export { login };
