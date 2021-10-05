import React, { useContext } from 'react';
import { View } from 'react-native';
import RegisterForm from '../../components/RegisterForm';
import { LightParagraph, Link } from '../Login/styles';
import { Context } from '../../context/DoctorLogin';
import { RegisterOptionView } from './styles';

export default function PacientRegister({ navigation }: any): JSX.Element {
  const { isDoctor, setIsDoctor } = useContext(Context);
  const paragraph =
    'Crie o seu registro para começar a utilizar o prescription';

  return (
    <View>
      <RegisterForm
        paragraph={paragraph}
        typeOfIdentification="CPF"
        navigation={navigation}
      />
      <RegisterOptionView>
        <LightParagraph onPress={() => setIsDoctor(!isDoctor)}>
          {isDoctor ? 'É um paciente?' : 'É um médico?'}{' '}
          <Link>Cadastre-se</Link>
        </LightParagraph>
      </RegisterOptionView>
    </View>
  );
}
