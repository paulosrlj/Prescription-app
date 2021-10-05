import React, { useContext } from 'react';
import Logo from '../../components/Logo/index';
import SignForm from '../../components/SignForm';
import {
  Container,
  ContentView,
  LightParagraph,
  Link,
  Paragraph,
  Title,
} from './styles';

import { Context } from '../../context/DoctorLogin';

export default function Login({ navigation }: any): JSX.Element {
  const { isDoctor, setIsDoctor } = useContext(Context);

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
          Precisa renovar a receita do seus remédios periodicamente?
        </Paragraph>
        <Paragraph>O prescription vai resolver isso para você</Paragraph>
      </ContentView>

      <SignForm />

      <Paragraph>
        Não tem uma conta?{' '}
        <Link onPress={() => navigation.navigate('Register')}>Cadastre-se</Link>
      </Paragraph>

      <Paragraph onPress={() => setIsDoctor(!isDoctor)}>
        {isDoctor ? 'É um paciente?' : 'É um médico?'} <Link>Logue aqui</Link>
      </Paragraph>
    </Container>
  );
}
