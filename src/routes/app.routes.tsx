import React from 'react';

import AuthenticatedRoutes from './authenticated.routes';
import UnauthenticatedRoutes from './unauthenticated.routes';

const isAuthenticated = () => true;

export default function AppRoutes(): JSX.Element {
  return isAuthenticated() ? (
    <AuthenticatedRoutes />
  ) : (
    <UnauthenticatedRoutes />
  );
}
