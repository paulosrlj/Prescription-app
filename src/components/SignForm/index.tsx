import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import { View, Text } from 'react-native';
import Input from '../Input/index';
import {
  InputContainer,
  FontAwesomeIcon,
  Button,
  ButtonText,
  Form,
  ValidationText,
} from './styles';

import { Context } from '../../context/DoctorLogin';

import { useAuthContext } from '../../context/Authentication/AuthProvider';

// Validações
import { loginSchema } from '../../util/Validations';

export default function SignForm(): JSX.Element {
  const { isDoctor, setIsDoctor } = useContext(Context);

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

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
    <Formik
      validationSchema={loginSchema}
      initialValues={{
        cpf: '',
        password: '',
      }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <Form>
          {errors.cpf && <ValidationText>{errors.cpf}</ValidationText>}
          <InputContainer>
            <FontAwesomeIcon name="user-alt" size={14} color="black" />
            <Input
              maxLength={11}
              keyboardType="numeric"
              onChangeText={handleChange('cpf')}
              onBlur={handleBlur('cpf')}
              value={values.cpf}
              placeholder={isDoctor ? 'CRM' : 'CPF'}
            />
          </InputContainer>

          {errors.password && (
            <ValidationText>{errors.password}</ValidationText>
          )}
          <InputContainer>
            <FontAwesomeIcon name="key" size={14} color="black" />
            <Input
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Senha"
              secureTextEntry={true}
            />
          </InputContainer>
          <Button onPress={() => handleSubmit()}>
            <ButtonText>Logar</ButtonText>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
