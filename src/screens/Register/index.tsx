import React, { useContext } from 'react';
import RegisterForm from '../../components/RegisterForm';
import { LightParagraph, Link } from '../Login/styles';
import { Context } from '../../context/DoctorLogin';
import { RegisterOptionView, RegisterView } from './styles';

export default function Register({ navigation }: any): JSX.Element {
  const { isDoctor, setIsDoctor } = useContext(Context);
  const paragraph =
    'Crie o seu registro para começar a utilizar o prescription';

  return (
    <RegisterView>
      <RegisterForm
        paragraph={paragraph}
        // typeOfIdentification="CPF"
        navigation={navigation}
      />
      <RegisterOptionView>
        <LightParagraph>
          Já tem uma conta?{' '}
          <Link onPress={() => navigation.navigate('Login')}>Entre</Link>
        </LightParagraph>
      </RegisterOptionView>
      <RegisterOptionView>
        <LightParagraph onPress={() => setIsDoctor(!isDoctor)}>
          {isDoctor ? 'É um paciente?' : 'É um médico?'}{' '}
          <Link>Cadastre-se</Link>
        </LightParagraph>
      </RegisterOptionView>
    </RegisterView>
  );
}
