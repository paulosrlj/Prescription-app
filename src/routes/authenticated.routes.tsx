import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Settings from '../screens/Settings';
import HomePaciente from '../screens/HomePaciente';
import Medicamentos from '../screens/Medicamentos';
import DoctorHome from '../screens/DoctorHome';
import DrugstoresMap from '../screens/DrugstoresMap';
// import MedicamentosForm from '../screens/MedicamentosForm';
import AddMedicine from '../screens/AddMedicine';

import { Context } from '../context/DoctorLogin';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AuthenticatedRoutes(): JSX.Element {
  const theme = useTheme();
  const { isDoctor } = useContext(Context);

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.info,
        headerShown: false,
        tabBarLabel: () => null,
      }}
    >
      {isDoctor ? (
        <Screen
          name="DoctorHome"
          component={DoctorHome}
          options={{
            tabBarIcon: ({ size, color }) => (
              <SimpleLineIcons name="credit-card" size={size} color={color} />
            ),
          }}
        />
      ) : (
        <Screen
          name="HomePaciente"
          component={HomePaciente}
          options={{
            tabBarIcon: ({ size, color }) => (
              <SimpleLineIcons name="credit-card" size={size} color={color} />
            ),
          }}
        />
      )}

      {/* <Screen
        name="AddMedicine"
        component={AddMedicine}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="credit-card" size={size} color={color} />
          ),
        }}
      /> */}

      <Screen
        name="SearchMedicine"
        component={Medicamentos} // TODO -> trocar quando a tela tiver pronta
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="pill" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="SearchDrugstores"
        component={DrugstoresMap}
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
