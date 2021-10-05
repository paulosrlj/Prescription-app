import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Input from '../Input/index';
import {
  InputContainer,
  FontAwesomeIcon,
  Button,
  ButtonText,
  Form,
} from './styles';

import { Context } from '../../context/DoctorLogin';

import { useAuthContext } from '../../context/Authentication/AuthProvider';

export default function SignForm(): JSX.Element {
  const { isDoctor, setIsDoctor } = useContext(Context);

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const { login, loginDoctor } = useAuthContext();

  async function handleLogin() {
    try {
      if (isDoctor) await loginDoctor(cpf, password);
      else await login(cpf, password);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Form>
      <InputContainer>
        <FontAwesomeIcon name="user-alt" size={14} color="black" />
        <Input onChangeText={setCpf} placeholder={isDoctor ? 'CRM' : 'CPF'} />
      </InputContainer>

      <InputContainer>
        <FontAwesomeIcon name="key" size={14} color="black" />
        <Input
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry={true}
        />
      </InputContainer>

      <Button onPress={() => handleLogin()}>
        <ButtonText>Logar</ButtonText>
      </Button>
    </Form>
  );
}
