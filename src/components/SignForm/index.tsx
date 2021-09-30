import React, { useState } from 'react';
import Input from '../Input/index';
import {
  InputContainer,
  FontAwesomeIcon,
  Button,
  ButtonText,
  Form,
} from './styles';

export default function SignForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form>
      <InputContainer>
        <FontAwesomeIcon name="user-alt" size={14} color="black" />
        <Input placeholder="Email" />
      </InputContainer>
      <InputContainer>
        <FontAwesomeIcon name="key" size={14} color="black" />
        <Input placeholder="Senha" secureTextEntry={true} />
      </InputContainer>
      <Button onPress={() => {}}>
        <ButtonText>Logar</ButtonText>
      </Button>
    </Form>
  );
}
