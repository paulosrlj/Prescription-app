import React from 'react';
import { View } from 'react-native';
import Input from '../Input/index';
import Logo from '../Logo';
import {
  Button,
  ButtonText,
  ContentView,
  Form,
  InputContainer,
  FontAwesomeIcon,
  LightParagraph,
  Title,
  MaterialIcon,
} from './styles';

interface IRegisterForm {
  paragraph: string;
  typeOfIdentification: string;
}

export default function RegisterForm(props: IRegisterForm): JSX.Element {
  const { paragraph, typeOfIdentification } = props;

  return (
    <View>
      <Logo />

      <ContentView>
        <Title>Cadastre-se</Title>
        <LightParagraph>{paragraph}</LightParagraph>
      </ContentView>

      <Form>
        <InputContainer>
          <FontAwesomeIcon name="user-alt" size={14} color="black" />
          <Input placeholder={typeOfIdentification} />
        </InputContainer>

        <InputContainer>
          <FontAwesomeIcon name="calendar" size={14} color="black" />
          <Input placeholder="Data de nascimento" />
        </InputContainer>

        <InputContainer>
          <FontAwesomeIcon name="user-alt" size={14} color="black" />
          <Input placeholder="Nome completo" />
        </InputContainer>

        <InputContainer>
          <MaterialIcon name="email" size={14} color="black" />
          <Input placeholder="Email" />
        </InputContainer>

        <InputContainer>
          <FontAwesomeIcon name="key" size={14} color="black" />
          <Input placeholder="Senha" secureTextEntry={true} />
        </InputContainer>
        <InputContainer>
          <FontAwesomeIcon name="key" size={14} color="black" />
          <Input placeholder="Confirme sua senha" secureTextEntry={true} />
        </InputContainer>
        <Button onPress={() => {}}>
          <ButtonText>Registrar</ButtonText>
        </Button>
      </Form>
    </View>
  );
}
