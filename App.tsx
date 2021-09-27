import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import AppLoading from 'expo-app-loading';
import theme from './src/global/styles/theme';

import HomePaciente from './src/screens/HomePaciente';

export default function App(): JSX.Element {
  const [fontLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <HomePaciente />
    </ThemeProvider>
  );
}
