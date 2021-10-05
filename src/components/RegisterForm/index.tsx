import React, { useContext, useState } from 'react';
import { Formik } from 'formik';
import { ScrollView } from 'react-native-gesture-handler';
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
  ValidationText,
} from './styles';
import { Context } from '../../context/DoctorLogin';
import api from '../../services/api';

import {
  registerDoctorSchema,
  registerPatientSchema,
} from '../../util/Validations';

interface IRegisterForm {
  paragraph: string;
  navigation: any;
  // typeOfIdentification: string;
}

interface RegisterParams {
  cpf?: string;
  crm?: string;
  name: string;
  password: string;
  email: string;
  phone: string;
}

export default function RegisterForm(props: IRegisterForm): JSX.Element {
  const { paragraph, navigation } = props;
  const { isDoctor, setIsDoctor } = useContext(Context);
  // const typeOfUser = isDoctor ? 'doctors' : 'patients';

  // const [userIdentification, setUserIdentification] = useState('');
  const [birth_date, setBirth_Date] = useState(new Date());
  // const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmedPassword, setConfirmedPassword] = useState('');

  const formateDate = (date: Date, isForYup: boolean) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const result = `${day < 10 ? '0' : ''}${day}/${
      month < 10 ? '0' : ''
    }${month}/${year}`;

    const resultForYup = date.toDateString();

    return isForYup ? resultForYup : result;
  };

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || birth_date;
    setShow(Platform.OS === 'ios');
    setBirth_Date(currentDate);
  };

  const handleRegister = async ({
    cpf,
    crm,
    name,
    password,
    email,
    phone,
  }: RegisterParams) => {
    const patientsData = {
      cpf,
      name,
      email,
      password,
      phone,
      birth_date: formateDate(birth_date, true),
    };

    const doctorsData = {
      crm,
      name,
      email,
      password,
      phone,
      birth_date: formateDate(birth_date, true),
    };

    const data = isDoctor ? doctorsData : patientsData;

    await api
      .post(isDoctor ? 'doctors' : 'patients', data)
      .then(response => {
        console.log(response.data);
        navigation.navigate('Login');
      })
      .catch(error => console.log(error));
  };

  return (
    <ScrollView>
      <Formik
        validationSchema={
          isDoctor ? registerDoctorSchema : registerPatientSchema
        }
        initialValues={{
          cpf: '',
          crm: '',
          name: '',
          password: '',
          confirmed_password: '',
          email: '',
          phone: '',
        }}
        onSubmit={({ cpf, crm, name, email, password, phone }) =>
          handleRegister({ cpf, crm, name, email, password, phone })
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <Logo />

            <ContentView>
              <Title>Cadastre-se</Title>
              <LightParagraph>{paragraph}</LightParagraph>
            </ContentView>

            <Form>
              {errors.name && <ValidationText>{errors.name}</ValidationText>}
              <InputContainer>
                <FontAwesomeIcon name="user-alt" size={14} color="black" />
                <Input
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder="Nome completo"
                />
              </InputContainer>

              {isDoctor
                ? errors.crm && <ValidationText>{errors.crm}</ValidationText>
                : errors.cpf && <ValidationText>{errors.cpf}</ValidationText>}
              <InputContainer>
                <FontAwesomeIcon name="key" size={14} color="black" />
                <Input
                  maxLength={isDoctor ? 20 : 11}
                  placeholder={isDoctor ? 'CRM' : 'CPF'}
                  onChangeText={
                    isDoctor ? handleChange('crm') : handleChange('cpf')
                  }
                  value={isDoctor ? values.crm : values.cpf}
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
                <LightParagraph>
                  {formateDate(birth_date, false)}
                </LightParagraph>
              </InputContainer>

              {errors.email && <ValidationText>{errors.email}</ValidationText>}
              <InputContainer>
                <MaterialIcon name="email" size={14} color="black" />
                <Input
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  value={values.email}
                />
              </InputContainer>

              {errors.phone && <ValidationText>{errors.phone}</ValidationText>}
              <InputContainer>
                <MaterialIcon name="phone" size={14} color="black" />
                <Input
                  placeholder="Telefone"
                  onChangeText={handleChange('phone')}
                  value={values.phone}
                />
              </InputContainer>

              {errors.password && (
                <ValidationText>{errors.password}</ValidationText>
              )}
              <InputContainer>
                <FontAwesomeIcon name="key" size={14} color="black" />
                <Input
                  placeholder="Senha"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  value={values.password}
                />
              </InputContainer>
              {errors.confirmed_password && (
                <ValidationText>{errors.confirmed_password}</ValidationText>
              )}
              <InputContainer>
                <FontAwesomeIcon name="key" size={14} color="black" />
                <Input
                  placeholder="Confirme sua senha"
                  secureTextEntry={true}
                  onChangeText={handleChange('confirmed_password')}
                  value={values.confirmed_password}
                />
              </InputContainer>

              <Button onPress={() => handleSubmit()}>
                <ButtonText>Registrar</ButtonText>
              </Button>
            </Form>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}
