import React, { useContext } from 'react';
import Logo from '../../components/Logo/index';
import SignUpForm from '../../components/SignupForm';
import {
  Container,
  ContentView,
  Link,
  LightParagraph,
  Paragraph,
  Title,
} from './styles';

import { Context } from '../../context/DoctorLogin';
import SignForm from '../../components/SignForm';

export default function SignIn(): JSX.Element {
  const { isDoctor, setIsDoctor } = useContext(Context);

  return (
    <Container>
      <Logo />

      <ContentView>
        <Title>Cadastre-se</Title>
        <LightParagraph>
          Crie o seu registro para começar a utilizar o prescription
        </LightParagraph>
      </ContentView>

      <SignUpForm />

      <Paragraph>
        Não tem uma conta? <Link>Cadatre-se</Link>
      </Paragraph>

      <Paragraph onPress={() => setIsDoctor(!isDoctor)}>
        {isDoctor ? 'É um paciente?' : 'É um médico?'} <Link>Logue aqui</Link>
      </Paragraph>
    </Container>
  );
}
