import React from 'react';
import RegisterForm from '../../components/RegisterForm';

export default function PacientRegister(): JSX.Element {
  const paragraph =
    'Crie o seu registro para começar a utilizar o prescription';

  return <RegisterForm paragraph={paragraph} typeOfIdentification="CPF" />;
}
