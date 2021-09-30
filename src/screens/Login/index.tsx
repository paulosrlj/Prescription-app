import React from 'react';
import Logo from '../../components/Logo/index';
import SignForm from '../../components/SignForm';
import {
  Container,
  ContentView,
  Link,
  LightParagraph,
  Paragraph,
  Title,
} from './styles';

export default function Login(): JSX.Element {
  return (
    <Container>
      <Logo />

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

      <SignForm />

      <Paragraph>
        Não tem uma conta? <Link>Cadatre-se</Link>
      </Paragraph>
    </Container>
  );
}
