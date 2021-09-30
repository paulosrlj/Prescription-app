import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Title, Vality, TextContainer } from './styles';

import { Data } from '../../screens/Medicamentos';

export default function MedicineCard({ data }: Data): JSX.Element {
  return (
    <Container>
      <>
        <MaterialCommunityIcons name="pill" size={30} />
        <TextContainer>
          <Title>{data.medicineName}</Title>
          <Vality>Valido até: {data.vality}</Vality>
        </TextContainer>
      </>
    </Container>
  );
}
