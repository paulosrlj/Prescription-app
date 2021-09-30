import React from 'react';
import RegisterForm from '../../components/RegisterForm';

export default function DoctorRegister(): JSX.Element {
  const paragraph =
    'Crie o seu registro para começar a receitar seus pacientes com o prescription';

  return <RegisterForm paragraph={paragraph} typeOfIdentification="CRM" />;
}
