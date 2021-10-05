import React, { useContext, useState } from 'react';
import { Formik } from 'formik';

import { ScrollView } from 'react-native-gesture-handler';

// import DateInput from '../DatePicker';

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

  const { login, loginDoctor } = useAuthContext();

  async function handleLogin(cpf: string, password: string) {
    try {
      if (isDoctor) await loginDoctor(cpf, password);
      else await login(cpf, password);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ScrollView>
      <Formik
        validationSchema={isDoctor ? '' : loginSchema}
        initialValues={{
          cpf: '',
          password: '',
          passwordConfirm: '',
          name: '',
          email: '',
          birth_date: '',
        }}
        onSubmit={({ cpf, password }) => handleLogin(cpf, password)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <Form>
            {errors.cpf && <ValidationText>{errors.cpf}</ValidationText>}
            <InputContainer>
              <FontAwesomeIcon name="user-alt" size={14} color="black" />
              <Input
                maxLength={isDoctor ? 20 : 11}
                keyboardType="numeric"
                onChangeText={handleChange('cpf')}
                onBlur={handleBlur('cpf')}
                value={values.cpf}
                placeholder={isDoctor ? 'CRM' : 'CPF'}
              />
            </InputContainer>

            {/* <DateInput /> */}

            <InputContainer>
              <FontAwesomeIcon name="user-alt" size={14} color="black" />
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Nome completo"
                secureTextEntry={true}
              />
            </InputContainer>

            <InputContainer>
              <FontAwesomeIcon name="envelope" size={24} color="black" />
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Email"
                secureTextEntry={true}
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

            <InputContainer>
              <FontAwesomeIcon name="key" size={14} color="black" />
              <Input
                maxLength={isDoctor ? 20 : 11}
                keyboardType="numeric"
                onChangeText={handleChange('cpf')}
                onBlur={handleBlur('cpf')}
                value={values.cpf}
                placeholder="Confirme sua senha"
              />
            </InputContainer>

            <Button onPress={() => handleSubmit()}>
              <ButtonText>Logar</ButtonText>
            </Button>
          </Form>
        )}
      </Formik>
    </ScrollView>
  );
}
