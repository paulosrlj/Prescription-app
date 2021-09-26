import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Container, Header, PatientCard, PatientCardName } from './styles';

export default function HomePaciente(): JSX.Element {
  return (
    <Container>
      <Header>
        <PatientCard>
          <PatientCardName>Paulo Sérgio Rodrigues Leite Junior</PatientCardName>
        </PatientCard>
      </Header>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
