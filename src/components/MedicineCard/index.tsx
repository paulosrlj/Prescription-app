import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Title, Label, Negrito, TextContainer } from './styles';
import { MedicineType } from '../../util/types';

interface Data {
  data: MedicineType;
}

export default function MedicineCard({ data }: Data): JSX.Element {
  return (
    <Container>
      <>
        <MaterialCommunityIcons name="pill" size={30} />
        <TextContainer>
          <Title>
            <Negrito>Nome:</Negrito> {data.nome}
          </Title>
          <Label>
            <Negrito>Categoria:</Negrito> {data.categoria}
          </Label>
          <Label>
            <Negrito>Número de registro:</Negrito> {data.idRegister}
          </Label>
          <Label>
            <Negrito>Classe terapeutica:</Negrito> {data.classe_terapeutica}
          </Label>
          <Label>
            <Negrito>Empresa detentora:</Negrito> {data.empresa_detentora}
          </Label>
        </TextContainer>
      </>
    </Container>
  );
}
