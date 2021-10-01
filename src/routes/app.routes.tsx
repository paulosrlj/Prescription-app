import React from 'react';

import AuthenticatedRoutes from './authenticated.routes';
import UnauthenticatedRoutes from './unauthenticated.routes';

import { useAuthContext } from '../context/Authentication/AuthProvider';

export default function AppRoutes(): JSX.Element {
  const { isLogado } = useAuthContext();

  return isLogado ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
}
