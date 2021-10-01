import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/global/styles/theme';

// Routes
import AppRoutes from './src/routes/app.routes';

// Contexts
import { IsModalActiveProvider } from './src/context/Modal';

export default function App(): JSX.Element {
  const [fontLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_700Bold,
  });

  if (!fontLoaded) return <AppLoading />;

  return (
    <IsModalActiveProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppRoutes />
          {/* <Login /> */}
          {/* <Settings /> */}
        </NavigationContainer>
      </ThemeProvider>
    </IsModalActiveProvider>
  );
}
