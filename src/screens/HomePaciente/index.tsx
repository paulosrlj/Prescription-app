import React from 'react';
import RecipeCard, { RecipeCardProps } from '../../components/RecipeCard';

import {
  Container,
  Header,
  Logo,
  Icon,
  LogoText,
  PatientCard,
  PatientCardCpf,
  PatientCardName,
  RecipeTitle,
  RecipeList,
} from './styles';

export interface DataListProps extends RecipeCardProps {
  id: string;
}

export default function HomePaciente(): JSX.Element {
  const data: DataListProps[] = [
    {
      id: '1',
      title: 'Asma',
      vality: '01/05/2023',
    },
    {
      id: '2',
      title: 'Sinusite',
      vality: '02/06/2022',
    },
    {
      id: '3',
      title: 'Acne',
      vality: '10/03/2025',
    },
    {
      id: '4',
      title: 'Acne',
      vality: '10/03/2025',
    },
    {
      id: '5',
      title: 'Acne',
      vality: '10/03/2025',
    },
    {
      id: '6',
      title: 'Acne',
      vality: '10/03/2025',
    },
  ];

  return (
    <Container>
      <Header>
        <PatientCard>
          <PatientCardName>Paulo Sérgio Rodrigues Leite Junior</PatientCardName>
          <PatientCardCpf>111.111.111-00</PatientCardCpf>
          <Logo>
            <Icon name="pill" />
            <LogoText>PRESCRIPTION</LogoText>
          </Logo>
        </PatientCard>
      </Header>

      <RecipeTitle>Suas receitas</RecipeTitle>

      <RecipeList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RecipeCard data={item} />}
      />
    </Container>
  );
}
