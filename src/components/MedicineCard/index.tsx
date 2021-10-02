import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Container,
  Title,
  Vality,
  Label,
  Negrito,
  TextContainer,
} from './styles';

import { Data } from '../../screens/Medicamentos';

export default function MedicineCard({ data }: Data): JSX.Element {
  return (
    <Container>
      <>
        <MaterialCommunityIcons name="pill" size={30} />
        <TextContainer>
          <Title>
            <Negrito>Nome:</Negrito> {data.medicineName}
          </Title>
          <Label>
            <Negrito>Categoria:</Negrito> {data.categoria}
          </Label>
          <Label>
            <Negrito>Número de registro:</Negrito> {data.numeroRegistro}
          </Label>
          <Label>
            <Negrito>Classe terapeutica:</Negrito> {data.classeTerapeutica}
          </Label>
          <Label>
            <Negrito>Empresa detentora:</Negrito> {data.empresaDetentora}
          </Label>
          <Vality>
            <Negrito>Valido até:</Negrito> {data.vality}
          </Vality>
        </TextContainer>
      </>
    </Container>
  );
}
