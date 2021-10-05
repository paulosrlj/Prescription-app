import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import PacientRegister from '../screens/PacientRegister';

const { Navigator, Screen } = createNativeStackNavigator();

export default function UnauthenticatedRoutes(): JSX.Element {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={PacientRegister} />
    </Navigator>
  );
}
