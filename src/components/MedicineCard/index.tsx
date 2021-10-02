import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Title, Vality, Label, TextContainer } from './styles';

import { Data } from '../../screens/Medicamentos';

export default function MedicineCard({ data }: Data): JSX.Element {
  return (
    <Container>
      <>
        <MaterialCommunityIcons name="pill" size={30} />
        <TextContainer>
          <Title>{data.medicineName}</Title>
          <Label>{data.categoria}</Label>
          <Label>{data.numeroRegistro}</Label>
          <Label>{data.classeTerapeutica}</Label>
          <Label>{data.empresaDetentora}</Label>
          <Vality>Valido até: {data.vality}</Vality>
        </TextContainer>
      </>
    </Container>
  );
}
