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
import { useAuthContext } from '../../context/Authentication/AuthProvider';

export default function Settings(): JSX.Element {
  const { logout, user } = useAuthContext();

  async function handleLogout() {
    await logout();
  }

  const formateDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const result = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''
      }${month}/${year}`;

    return result;
  };

  return (
    <Container>
      <Header>
        <PatientCard>
          <PatientCardName>{user?.name}</PatientCardName>
          {user?.cpf ? (
            <PatientCardCpf>{user?.cpf}</PatientCardCpf>
          ) : (
            <PatientCardCpf>{user?.crm}</PatientCardCpf>
          )}

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
        </Divider>
        <Divider>
          <InfoText>{user?.name}</InfoText>
          {user?.cpf ? (
            <InfoText>{user?.cpf}</InfoText>
          ) : (
            <InfoText>{user?.crm}</InfoText>
          )}

          <InfoText>{user?.email}</InfoText>
          <InfoText>{user?.birth_date}</InfoText>
          <InfoText>{user?.phone}</InfoText>
        </Divider>
      </InfoBox>

      <CopyIdButton>
        <ButtonText>Copiar id</ButtonText>
      </CopyIdButton>
      <LogoutButton onPress={() => handleLogout()}>
        <ButtonText>Logout</ButtonText>
      </LogoutButton>
    </Container>
  );
}
