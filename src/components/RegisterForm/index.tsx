import React, { useContext, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Platform, Pressable } from 'react-native';
import Input from '../Input/index';
import Logo from '../Logo';
import {
  BirtDateView,
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
import { Context } from '../../context/DoctorLogin';
import api from '../../services/api';

interface IRegisterForm {
  paragraph: string;
  navigation: any;
  typeOfIdentification: string;
}

export default function RegisterForm(props: IRegisterForm): JSX.Element {
  const { paragraph, navigation, typeOfIdentification } = props;
  const { isDoctor, setIsDoctor } = useContext(Context);
  const typeOfUser = isDoctor ? 'doctors' : 'patients';

  const [userIdentification, setUserIdentification] = useState('');
  const [birth_date, setBirth_Date] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const formateDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const result = `${day < 10 ? '0' : ''}${day}/${
      month < 10 ? '0' : ''
    }${month}/${year}`;

    return result;
  };

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || birth_date;
    setShow(Platform.OS === 'ios');
    setBirth_Date(currentDate);
  };

  const handleRegister = async () => {
    const patientsData = {
      cpf: userIdentification,
      name,
      email,
      password,
      phone,
      birth_date: formateDate(birth_date),
    };

    const doctorsData = {
      crm: userIdentification,
      name,
      email,
      password,
      phone,
      birth_date: formateDate(birth_date),
    };

    const data = isDoctor ? doctorsData : patientsData;

    await api
      .post(typeOfUser, data)
      .then(response => {
        console.log(response.data);
        navigation.navigate('Login');
      })
      .catch(error => console.log(error));
  };

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
          <Input placeholder="Nome completo" onChangeText={setName} />
        </InputContainer>

        <InputContainer>
          <FontAwesomeIcon name="user-alt" size={14} color="black" />
          <Input
            placeholder={isDoctor ? 'CRM' : 'CPF'}
            onChangeText={setUserIdentification}
          />
        </InputContainer>

        <InputContainer>
          <Pressable onPress={() => setShow(true)}>
            <FontAwesomeIcon name="calendar" size={14} color="black" />
          </Pressable>
          {/* <Input placeholder="patientsData de nascimento" onChangeText={setpatientsDataNasc} /> */}
          <BirtDateView>
            {show && (
              <DateTimePicker
                mode="date"
                value={birth_date}
                onChange={onChange}
              />
            )}
          </BirtDateView>
          <LightParagraph>{formateDate(birth_date)}</LightParagraph>
        </InputContainer>

        <InputContainer>
          <MaterialIcon name="email" size={14} color="black" />
          <Input placeholder="Email" onChangeText={setEmail} />
        </InputContainer>

        <InputContainer>
          <MaterialIcon name="phone" size={14} color="black" />
          <Input placeholder="Telefone" onChangeText={setPhone} />
        </InputContainer>

        <InputContainer>
          <FontAwesomeIcon name="key" size={14} color="black" />
          <Input
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </InputContainer>

        <InputContainer>
          <FontAwesomeIcon name="key" size={14} color="black" />
          <Input
            placeholder="Confirme sua senha"
            secureTextEntry={true}
            onChangeText={setConfirmedPassword}
          />
        </InputContainer>

        <Button onPress={() => handleRegister()}>
          <ButtonText>Registrar</ButtonText>
        </Button>
      </Form>
    </View>
  );
}
