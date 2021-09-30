import React, { useState } from 'react';

import {
  Button,
  ButtonText,
  Container,
  ContentView,
  Icon,
  Input,
  InputContainer,
  InputIcon,
  Link,
  Logo,
  LogoText,
  LogoView,
  LightParagraph,
  Paragraph,
  SignForm,
  Title,
} from './styles';

export default function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <LogoView>
        <Logo>
          <Icon name="pill" />
          <LogoText>PRESCRIPTION</LogoText>
        </Logo>
      </LogoView>

      <ContentView>
        <Title>Bem vindo !</Title>
        <LightParagraph>
          Cadastre-se ou faça login para continuar
        </LightParagraph>
      </ContentView>

      <ContentView>
        <Paragraph>
          Precisa renovar a receita do seus remédios de tempo em tempo?
        </Paragraph>
        <Paragraph>O prescription vai resolver isso para você</Paragraph>
      </ContentView>

      <SignForm>
        <InputContainer>
          <InputIcon name="user-alt" size={14} color="black" />
          <Input placeholder="Email" />
        </InputContainer>
        <InputContainer>
          <InputIcon name="key" size={14} color="black" />
          <Input placeholder="Senha" />
        </InputContainer>
        <Button onPress={() => {}}>
          <ButtonText>Logar</ButtonText>
        </Button>
      </SignForm>

      <Paragraph>
        Não tem uma conta? <Link>Cadatre-se</Link>
      </Paragraph>
    </Container>
  );
}
