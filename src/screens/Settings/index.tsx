import React from 'react';

import {
  Container,
  Header,
  Icon,
  PatientCard,
  PatientCardCpf,
  PatientCardName,
  Logo,
  LogoText,
  Title,
  InfoBox,
  InfoLabel,
  InfoText,
  Divider,
  CopyIdButton,
  ButtonText,
  LogoutButton,
} from './styles';

export default function Settings(): JSX.Element {
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
      <Title>Informações</Title>

      <InfoBox>
        <Divider>
          <InfoLabel>Nome</InfoLabel>
          <InfoLabel>CPF/CRM</InfoLabel>
          <InfoLabel>Email</InfoLabel>
          <InfoLabel>Data Nasc</InfoLabel>
          <InfoLabel>Telefone</InfoLabel>
          <InfoLabel>ID Cartão</InfoLabel>
        </Divider>
        <Divider>
          <InfoText>Paulo Sérgio Rodrigues Leite Junior</InfoText>
          <InfoText>000.000.000.00</InfoText>
          <InfoText>paulo.leite@academico.ifpb.edu.br</InfoText>
          <InfoText>30/05/2001</InfoText>
          <InfoText>(83) 00000-0000</InfoText>
          <InfoText>ff994260-8236-49c2-841b-21acd29b10b0</InfoText>
        </Divider>
      </InfoBox>

      <CopyIdButton>
        <ButtonText>Copiar id</ButtonText>
      </CopyIdButton>
      <LogoutButton onPress={() => null}>
        <ButtonText>Logout</ButtonText>
      </LogoutButton>
    </Container>
  );
}
