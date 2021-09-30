import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Settings from '../screens/Settings';
import HomePaciente from '../screens/HomePaciente';
import Medicamentos from '../screens/Medicamentos';

const { Navigator, Screen } = createBottomTabNavigator();

export default function BottomNavBar(): JSX.Element {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.info,
        headerShown: false,
        tabBarLabel: () => null,
      }}
    >
      <Screen
        name="HomePaciente"
        component={HomePaciente}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="credit-card" size={size} color={color} />
          ),
        }}
      />

      <Screen
        component={Medicamentos} // TODO -> trocar quando a tela tiver pronta
        name="SearchMedicine"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="pill" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="SearchDrugstores"
        component={Settings}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="location-pin" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="menu" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
