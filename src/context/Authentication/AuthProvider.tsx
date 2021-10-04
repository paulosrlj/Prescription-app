import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AxiosResponse } from 'axios';
import api from '../../services/api';

import { User } from '../../util/types';

interface Context {
  user: User | null;
  login: (cpf: string, password: string) => Promise<void>;
  loginDoctor: (crm: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLogado: boolean;
}

const AuthContext = createContext({} as Context);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  async function loadStorage() {
    const userStorage = await AsyncStorage.getItem('Auth.user');
    const tokenStorage = await AsyncStorage.getItem('Auth.token');

    if (userStorage && tokenStorage) {
      api.defaults.headers.common.Authorization = `Bearer ${tokenStorage}`;
      setUser(JSON.parse(userStorage));
    }
  }

  async function login(cpf: string, password: string) {
    const data = {
      cpf,
      password,
    };

    const { data: response } = (await api.post(
      'patients/login',
      data,
    )) as AxiosResponse<User>;

    api.defaults.headers.common.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('Auth.user', JSON.stringify(response));
    await AsyncStorage.setItem('Auth.token', JSON.stringify(response.token));
    setUser(response);
  }

  async function loginDoctor(crm: string, password: string) {
    const data = {
      crm,
      password,
    };

    const { data: response } = (await api.post(
      'doctors/login',
      data,
    )) as AxiosResponse<User>;

    api.defaults.headers.common.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('Auth.user', JSON.stringify(response));
    await AsyncStorage.setItem('Auth.token', JSON.stringify(response.token));
    setUser(response);
  }

  async function logout() {
    setUser(null);
    await AsyncStorage.removeItem('Auth.user');
    await AsyncStorage.removeItem('Auth.token');
  }

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isLogado: !!user, loginDoctor }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext(): Context {
  const context = useContext(AuthContext);
  return context;
}
