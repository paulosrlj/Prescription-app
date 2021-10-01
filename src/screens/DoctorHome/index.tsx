import React from 'react';
import DoctorHomeHeader from '../../components/DoctorHomeHeader';
import DoctorRecipeRegister from '../../components/DoctorRecipeRegister';
import { Container } from './styles';

const DoctorHome = (): JSX.Element => {
  return (
    <Container>
      <DoctorHomeHeader />
      <DoctorRecipeRegister />
    </Container>
  );
};

export default DoctorHome;
