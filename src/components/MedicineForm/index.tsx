import { MaterialCommunityIcons } from '@expo/vector-icons';
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
  MaterialCommunityIconss,
} from './styles';

interface IMedicineForm {
  paragraph: string;
  typeOfIdentification: string;
}

export default function MedicineForm(props: IMedicineForm): JSX.Element {
  const { paragraph, typeOfIdentification } = props;

  return (
    <View>
      <Logo />

      <ContentView>
        <Title>Adicionar remédio</Title>
        <LightParagraph>{paragraph}</LightParagraph>
      </ContentView>

      <Form>
        <InputContainer>
          <FontAwesomeIcon name="user-alt" size={14} color="black" />
          <Input placeholder={typeOfIdentification} />
        </InputContainer>

        <InputContainer>
          <FontAwesomeIcon name="calendar" size={14} color="black" />
          <Input placeholder="Data de validade" />
        </InputContainer>

        <InputContainer>
          <MaterialCommunityIconss name="pill" size={20} color="black" />
          <Input placeholder="Nome do composto" />
        </InputContainer>

        <Button onPress={() => {}}>
          <ButtonText>Registrar</ButtonText>
        </Button>
      </Form>
    </View>
  );
}
